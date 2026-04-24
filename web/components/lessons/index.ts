import type { ComponentType } from "react";

import M1L1 from "./module1/lesson-1";
import M1L2 from "./module1/lesson-2";
import M1L3 from "./module1/lesson-3";
import M2L1 from "./module2/lesson-1";
import M2L2 from "./module2/lesson-2";
import M2L3 from "./module2/lesson-3";
import M3L1 from "./module3/lesson-1";
import M3L2 from "./module3/lesson-2";
import M3L3 from "./module3/lesson-3";
import M3L4 from "./module3/lesson-4";
import M4L1 from "./module4/lesson-1";
import M4L2 from "./module4/lesson-2";
import M4L3 from "./module4/lesson-3";
import M5L1 from "./module5/lesson-1";
import M5L2 from "./module5/lesson-2";
import M5L3 from "./module5/lesson-3";
import M5L4 from "./module5/lesson-4";
import M6L1 from "./module6/lesson-1";
import M6L2 from "./module6/lesson-2";
import M6L3 from "./module6/lesson-3";
import M7L1 from "./module7/lesson-1";
import M7L2 from "./module7/lesson-2";
import M7L3 from "./module7/lesson-3";
import M7L4 from "./module7/lesson-4";

export const lessonRegistry: Record<string, ComponentType> = {
  "1-1": M1L1, "1-2": M1L2, "1-3": M1L3,
  "2-1": M2L1, "2-2": M2L2, "2-3": M2L3,
  "3-1": M3L1, "3-2": M3L2, "3-3": M3L3, "3-4": M3L4,
  "4-1": M4L1, "4-2": M4L2, "4-3": M4L3,
  "5-1": M5L1, "5-2": M5L2, "5-3": M5L3, "5-4": M5L4,
  "6-1": M6L1, "6-2": M6L2, "6-3": M6L3,
  "7-1": M7L1, "7-2": M7L2, "7-3": M7L3, "7-4": M7L4,
};
