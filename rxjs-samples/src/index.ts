import { basicReactive } from "./samples/basic-reactive";
import { testMulticast } from "./samples/multicast";
import { testConcatMap } from "./samples/operators/concatmap-operator";
import { testDebounce } from "./samples/operators/debounce-operator";
import { testFilterOperator } from "./samples/operators/filter-operator";
import { testMapAndFilter } from "./samples/operators/map-filter";
import { testMapOperator } from "./samples/operators/map-operator";
import { testMergeMap } from "./samples/operators/mergemap-operator";
import { testSwitchMap } from "./samples/operators/switchmap-operator";
import { testUnicast } from "./samples/unicast";

basicReactive();
// testMapAndFilter();
// testUnicast();
// testMulticast();
// testDebounce();
// testSwitchMap();
// testMergeMap();
// testConcatMap();