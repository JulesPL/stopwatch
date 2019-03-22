import "./scss/app.scss"

import { Stopwatch } from "./js/model/stopwatch"

import { DOMData } from "./js/helpers/DOMData"

import { StopwatchControlsView } from "./js/view/StopwatchControlsView"
import { StopwatchControlsController } from "./js/controller/StopwatchControlsController"

import { LapTimeView } from "./js/view/LapTimeView"
import { TotalTimeView } from "./js/view/TotalTimeView"

import { LapsTableView } from "./js/view/LapsTableView"

const stopwatch = new Stopwatch()

const stopwatchControlsController = new StopwatchControlsController(stopwatch)
const stopwatchControlsView = new StopwatchControlsView(
    new DOMData(".controls", "#stopwatchControls"),
    stopwatchControlsController
)

const lapTimeView = new LapTimeView(new DOMData(".lapCount", "#stopwatchLapTime"))

const totalTimeView = new TotalTimeView(new DOMData(".totalCount", "#stopwatchTotalTime"))

const lapsTableView = new LapsTableView(new DOMData(".lapsTable", "#stopwatchLapsTableRow"))
