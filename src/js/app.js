import "../scss/app.scss"

import { Stopwatch } from "./model/stopwatch"

import { DOMData } from "./helpers/DOMData"

import { StopwatchControlsView } from "./view/StopwatchControlsView"
import { StopwatchControlsController } from "./controller/StopwatchControlsController"

import { LapTimeView } from "./view/LapTimeView"
import { TotalTimeView } from "./view/TotalTimeView"

import { LapsTableView } from "./view/LapsTableView"

const stopwatch = new Stopwatch()

const stopwatchControlsController = new StopwatchControlsController(stopwatch)
const stopwatchControlsView = new StopwatchControlsView(
    new DOMData(".controls", "#stopwatchControls"),
    stopwatchControlsController
)

const lapTimeView = new LapTimeView(new DOMData(".lapCount", "#stopwatchLapTime"))

const totalTimeView = new TotalTimeView(new DOMData(".totalCount", "#stopwatchTotalTime"))

const lapsTableView = new LapsTableView(new DOMData(".lapsTable", "#stopwatchLapsTableRow"))
