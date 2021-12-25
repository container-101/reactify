import React, { useCallback, useEffect, useRef } from "react";
import styles from "./Map.module.scss";

const Map = () => {
	const mapRef = useRef<HTMLDivElement>(null);

	const inintMap = useCallback(() => {
		return new window.google.maps.Map(mapRef.current as HTMLElement, {
			center: { lat: 37.541, lng: 128.986 },
			zoom: 8,
		});
	}, [mapRef]);

	useEffect(() => {
		inintMap();
	}, [inintMap]);

	return <div ref={mapRef} className={styles.map} />;
};

export default Map;
