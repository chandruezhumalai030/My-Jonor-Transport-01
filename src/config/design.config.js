import { ws } from "../utils/design/measurement.design";
import { colors } from "./colors.config";
import fontsConfig from "./fonts.config";

export const design = {
    TEXT: {
        400: {
            14: {
                color : colors.black,
                fontSize: ws(14),
                fontFamily: fontsConfig[400],
                letterSpacing: 0.2
            },
            16: {
                color : colors.black,
                fontSize: ws(16),
                fontFamily: fontsConfig[400],
                letterSpacing: 0.2
            },
            18: {
                color : colors.black,
                fontSize: ws(18),
                fontFamily: fontsConfig[400],
                letterSpacing: 0.2
            },
        },
        500: {
            18: {
                color : colors.black,
                fontSize: ws(18),
                fontFamily: fontsConfig[500],
                letterSpacing: 0.2
            },
        },
        600: {
            16: {
                color : colors.black,
                fontSize: ws(16),
                fontFamily: fontsConfig[600],
                letterSpacing: 0.2
            },
            18: {
                color : colors.black,
                fontSize: ws(18),
                fontFamily: fontsConfig[600],
                letterSpacing: 0.2
            },
            14: {
                color : colors.black,
                fontSize: ws(14),
                fontFamily: fontsConfig[600],
                letterSpacing: 0.2
            }
        },
        700: {
            12: {
                color : colors.black,
                fontSize: ws(12),
                fontFamily: fontsConfig[700],
                letterSpacing: 0.2
            },
            18: {
                color : colors.black,
                fontSize: ws(18),
                fontFamily: fontsConfig[700],
                letterSpacing: 0.2
            },
            20: {
                color: colors.black,
                fontSize: ws(20),
                fontFamily: fontsConfig[700],
                letterSpacing: 0.2
            },
            24: {
                color : colors.black,
                fontSize: ws(24),
                fontFamily: fontsConfig[700],
                letterSpacing: 0.2
            },
            48: {
                color : colors.black,
                fontSize: ws(48),
                fontFamily: fontsConfig[700],
                letterSpacing: 0.2
            }
        },
    }
}