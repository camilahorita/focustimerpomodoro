import Controls from "./controls.js"
import Timer from "./timer.js"
import {  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay, } from "./elements.js"

import Sounds from "./sounds.js"
import Events from "./events.js"

const sound = Sounds()

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset
})

Events({
  controls,
  timer,
  sound,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn
})


