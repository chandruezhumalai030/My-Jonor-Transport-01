import { Dimensions, PixelRatio } from "react-native";

// Screen size
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const SCREEN_SIZE = Math.sqrt(SCREEN_WIDTH * SCREEN_HEIGHT) / 100;

// Base size
const BASE_WIDTH = 428;
const BASE_HEIGHT = 926;
const BASE_FACTOR = 0.5;

// Scaler based on Base & screen size
const ws = (size) => PixelRatio.roundToNearestPixel(size * (SCREEN_WIDTH / BASE_WIDTH));
const hs = (size) => PixelRatio.roundToNearestPixel(size * (SCREEN_HEIGHT / BASE_HEIGHT));

export { BASE_WIDTH, BASE_HEIGHT, BASE_FACTOR, SCREEN_WIDTH, SCREEN_HEIGHT, SCREEN_SIZE, ws, hs};
