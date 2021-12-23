import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./Timer.module.scss";
import { framer_var } from "@src/utils/constants";
import { ITimerTime } from "@src/core/interface/timer";
import classNames from "classnames";

interface ITimerProps {
  timerInfo: ITimerTime;
}

const Timer = ({ timerInfo }: ITimerProps) => {
  const timerRef = useRef<HTMLDivElement>(null);
  const [restTime, setRestTime] = useState<ITimerTime>(timerInfo);
  const { hh, mm, ss } = restTime;

  useEffect(() => {
    const countdown = setInterval(() => {
      if (ss > 0) setRestTime({ hh, mm, ss: ss - 1 });
      if (mm < 1) {
        timerRef.current?.style.setProperty("--duration", `${2}s`);
      }
      if (ss === 0) {
        if (mm === 0) clearInterval(countdown);
        else setRestTime({ hh, mm: mm - 1, ss: 59 });
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [hh, mm, ss]);

  return (
    <motion.div
      ref={timerRef}
      variants={framer_var.default.variants}
      className={classNames(styles.container, styles.enable_animation)}
    >
      <div className={styles.text}>
        {mm}:{ss < 10 ? `0${ss}` : ss}
      </div>
    </motion.div>
  );
};

export default Timer;