import { Destination } from "./Destination";
import { Cargo } from "./Cargo";
import { TrackingMap } from "./TrackingMap";

const trackingMap = new TrackingMap("gmap");
trackingMap.attachMarker(new Destination());
trackingMap.attachMarker(new Cargo());
