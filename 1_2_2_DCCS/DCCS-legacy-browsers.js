/************* 
 * Dccs *
 *************/


// store info about the experiment session:
let expName = 'DCCS';  // from the Builder filename that created this script
let expInfo = {
    '编号': '',
    '主试ID': '',
};

// Start code blocks for 'Before Experiment'
// for our own functions we need these specified in the global space 
// so these are defined in the "Before experiment" tab
// linspace (this will be used in place of numpy.linspace for picking ISI)


var n;
function linspace(a,b,n) {
    if(typeof n === undefined) n = Math.max(Math.round(b-a)+1,1);
    if(n<2) { return n===1?[a]:[]; }
    var i,ret = Array(n);
    n--;
    for(i=n;i>=0;i--) { ret[i] = (i*b+(n-i)*a)/n; }
    return ret;
}
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);


flowScheduler.add(instruction_1RoutineBegin());
flowScheduler.add(instruction_1RoutineEachFrame());
flowScheduler.add(instruction_1RoutineEnd());
flowScheduler.add(ShapeBoatExRoutineBegin());
flowScheduler.add(ShapeBoatExRoutineEachFrame());
flowScheduler.add(ShapeBoatExRoutineEnd());
flowScheduler.add(ShapeRabbitExRoutineBegin());
flowScheduler.add(ShapeRabbitExRoutineEachFrame());
flowScheduler.add(ShapeRabbitExRoutineEnd());
const blockLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blockLoopBegin(blockLoopScheduler));
flowScheduler.add(blockLoopScheduler);
flowScheduler.add(blockLoopEnd);












flowScheduler.add(ColorRedExRoutineBegin());
flowScheduler.add(ColorRedExRoutineEachFrame());
flowScheduler.add(ColorRedExRoutineEnd());
flowScheduler.add(ColorBlueExRoutineBegin());
flowScheduler.add(ColorBlueExRoutineEachFrame());
flowScheduler.add(ColorBlueExRoutineEnd());
const block2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(block2LoopBegin(block2LoopScheduler));
flowScheduler.add(block2LoopScheduler);
flowScheduler.add(block2LoopEnd);












flowScheduler.add(CombInstructionsRoutineBegin());
flowScheduler.add(CombInstructionsRoutineEachFrame());
flowScheduler.add(CombInstructionsRoutineEnd());
flowScheduler.add(Instructions2RoutineBegin());
flowScheduler.add(Instructions2RoutineEachFrame());
flowScheduler.add(Instructions2RoutineEnd());
const LoopSelectFreqNumberLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(LoopSelectFreqNumberLoopBegin(LoopSelectFreqNumberLoopScheduler));
flowScheduler.add(LoopSelectFreqNumberLoopScheduler);
flowScheduler.add(LoopSelectFreqNumberLoopEnd);


















flowScheduler.add(ThankYouRoutineBegin());
flowScheduler.add(ThankYouRoutineEachFrame());
flowScheduler.add(ThankYouRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'resources/ShapePractTrial.csv', 'path': 'resources/ShapePractTrial.csv'},
    {'name': 'resources/assets/RedRabbitWhite.png', 'path': 'resources/assets/RedRabbitWhite.png'},
    {'name': 'resources/assets/BlueBoatWhite.png', 'path': 'resources/assets/BlueBoatWhite.png'},
    {'name': 'resources/assets/RedBoat.png', 'path': 'resources/assets/RedBoat.png'},
    {'name': 'resources/assets/BlueBoat.png', 'path': 'resources/assets/BlueBoat.png'},
    {'name': 'resources/assets/RedRabbit.png', 'path': 'resources/assets/RedRabbit.png'},
    {'name': 'resources/assets/BlueRabbit.png', 'path': 'resources/assets/BlueRabbit.png'},
    {'name': 'resources/colorPract.csv', 'path': 'resources/colorPract.csv'},
    {'name': 'resources/assets/RedRabbitWhite.png', 'path': 'resources/assets/RedRabbitWhite.png'},
    {'name': 'resources/assets/BlueBoatWhite.png', 'path': 'resources/assets/BlueBoatWhite.png'},
    {'name': 'resources/assets/RedBoat.png', 'path': 'resources/assets/RedBoat.png'},
    {'name': 'resources/assets/BlueBoat.png', 'path': 'resources/assets/BlueBoat.png'},
    {'name': 'resources/assets/RedRabbit.png', 'path': 'resources/assets/RedRabbit.png'},
    {'name': 'resources/assets/BlueRabbit.png', 'path': 'resources/assets/BlueRabbit.png'},
    {'name': 'resources/selectFreqNum.csv', 'path': 'resources/selectFreqNum.csv'},
    {'name': 'resources/color.csv', 'path': 'resources/color.csv'},
    {'name': 'resources/assets/BlueBallWhite.png', 'path': 'resources/assets/BlueBallWhite.png'},
    {'name': 'resources/assets/YellowTruckWhite.png', 'path': 'resources/assets/YellowTruckWhite.png'},
    {'name': 'resources/assets/BlueBall.png', 'path': 'resources/assets/BlueBall.png'},
    {'name': 'resources/assets/YellowBall.png', 'path': 'resources/assets/YellowBall.png'},
    {'name': 'resources/assets/BlueTruck.png', 'path': 'resources/assets/BlueTruck.png'},
    {'name': 'resources/assets/YellowTruck.png', 'path': 'resources/assets/YellowTruck.png'},
    {'name': 'resources/shape.csv', 'path': 'resources/shape.csv'},
    {'name': 'resources/assets/BlueBallWhite.png', 'path': 'resources/assets/BlueBallWhite.png'},
    {'name': 'resources/assets/YellowTruckWhite.png', 'path': 'resources/assets/YellowTruckWhite.png'},
    {'name': 'resources/assets/BlueBall.png', 'path': 'resources/assets/BlueBall.png'},
    {'name': 'resources/assets/YellowBall.png', 'path': 'resources/assets/YellowBall.png'},
    {'name': 'resources/assets/BlueTruck.png', 'path': 'resources/assets/BlueTruck.png'},
    {'name': 'resources/assets/YellowTruck.png', 'path': 'resources/assets/YellowTruck.png'},
    {'name': 'resources/audio/F-a.mp3', 'path': 'resources/audio/F-a.mp3'},
    {'name': 'resources/audio/F-d.mp3', 'path': 'resources/audio/F-d.mp3'},
    {'name': 'resources/audio/F-b.mp3', 'path': 'resources/audio/F-b.mp3'},
    {'name': 'resources/audio/F-d1.mp3', 'path': 'resources/audio/F-d1.mp3'},
    {'name': 'resources/audio/F-e.mp3', 'path': 'resources/audio/F-e.mp3'},
    {'name': 'resources/audio/F-g.mp3', 'path': 'resources/audio/F-g.mp3'},
    {'name': 'resources/assets/RedBoat.png', 'path': 'resources/assets/RedBoat.png'},
    {'name': 'resources/assets/RedRabbitWhite.png', 'path': 'resources/assets/RedRabbitWhite.png'},
    {'name': 'resources/assets/BlueBoatWhite.png', 'path': 'resources/assets/BlueBoatWhite.png'},
    {'name': 'resources/assets/BlueBoatGreen.png', 'path': 'resources/assets/BlueBoatGreen.png'},
    {'name': 'resources/assets/BlueRabbit.png', 'path': 'resources/assets/BlueRabbit.png'},
    {'name': 'resources/assets/RedRabbitGreen.png', 'path': 'resources/assets/RedRabbitGreen.png'},
    {'name': 'resources/assets/star_text.png', 'path': 'resources/assets/star_text.png'},
    {'name': 'resources/audio/F11.mp3', 'path': 'resources/audio/F11.mp3'},
    {'name': 'resources/assets/star.png', 'path': 'resources/assets/star.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'resources/assets/RedRabbitRed.png', 'path': 'resources/assets/RedRabbitRed.png'},
    {'name': 'resources/assets/BlueBoatRed.png', 'path': 'resources/assets/BlueBoatRed.png'},
    {'name': 'resources/assets/star_text_formal.png', 'path': 'resources/assets/star_text_formal.png'},
    {'name': 'resources/audio/F12.mp3', 'path': 'resources/audio/F12.mp3'},
    {'name': 'resources/assets/BlueBallWhite.png', 'path': 'resources/assets/BlueBallWhite.png'},
    {'name': 'resources/assets/YellowTruckWhite.png', 'path': 'resources/assets/YellowTruckWhite.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.2';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["\u4e3b\u8bd5ID"]}_1_2_2_${expName}_${expInfo["\u7f16\u53f7"]}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var dummyClock;
var sound_4;
var sound_5;
var sound_6;
var sound_7;
var sound_8;
var sound_12;
var instruction_1Clock;
var shuffle;
var text_homebase;
var wecomle_resp;
var ShapeBoatExClock;
var textBoat;
var stimulus;
var image_2;
var image_3;
var image_12;
var image_13;
var image_14;
var key_resp_8;
var text_11;
var ShapeRabbitExClock;
var text;
var image;
var image_10;
var image_4;
var image_15;
var image_16;
var image_17;
var key_resp_7;
var text_10;
var InstructionsClock;
var image_5;
var key_resp_2;
var sound_2;
var InterTrial_IntrevalClock;
var image_6;
var image_7;
var ISIcodeClock;
var FixationClock;
var image_8;
var image_9;
var image_37;
var CueShapeClock;
var text_14;
var image_38;
var image_39;
var StimClock;
var image_40;
var image_41;
var image_42;
var key_resp_3;
var FeedbackClock;
var image_43;
var image_44;
var image_45;
var sound_9;
var UpdateAccuracyClock;
var counterOne;
var counterTwo;
var continueStatusClock;
var isForward;
var text_24;
var key_resp_18;
var sound_10;
var ColorRedExClock;
var text_7;
var image_18;
var image_20;
var image_19;
var image_21;
var image_22;
var image_23;
var key_resp_9;
var text_12;
var ColorBlueExClock;
var text_8;
var image_24;
var image_25;
var image_26;
var image_27;
var image_28;
var image_29;
var key_resp_10;
var text_13;
var CueColorClock;
var text_16;
var image_46;
var image_47;
var Stim2Clock;
var image_58;
var image_59;
var image_60;
var key_resp_12;
var Feedback2Clock;
var image_61;
var image_62;
var image_63;
var sound_1;
var UpdateAccuracy2Clock;
var ContStatus2Clock;
var text_17;
var key_resp_16;
var sound_11;
var CombInstructionsClock;
var MainTaskPrompt;
var key_resp_4;
var Instructions2Clock;
var image_11;
var key_resp;
var sound_3;
var countResetClock;
var ITI_CombClock;
var image_65;
var image_66;
var FixationComb_2Clock;
var image_67;
var image_68;
var image_69;
var cueComb_3Clock;
var image_75;
var image_76;
var text_21;
var PracticeComb_2Clock;
var image_72;
var image_73;
var image_74;
var key_resp_13;
var stopColorLoopClock;
var cueComb_2Clock;
var image_70;
var image_71;
var text_20;
var stopShapeLoopClock;
var ThankYouClock;
var text_19;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "dummy"
  dummyClock = new util.Clock();
  sound_4 = new sound.Sound({
      win: psychoJS.window,
      value: 'resources/audio/F-a.mp3',
      secs: 1.0,
      });
  sound_4.setVolume(1.0);
  sound_5 = new sound.Sound({
      win: psychoJS.window,
      value: 'resources/audio/F-d.mp3',
      secs: 1.0,
      });
  sound_5.setVolume(1.0);
  sound_6 = new sound.Sound({
      win: psychoJS.window,
      value: 'resources/audio/F-b.mp3',
      secs: 1.0,
      });
  sound_6.setVolume(1.0);
  sound_7 = new sound.Sound({
      win: psychoJS.window,
      value: 'resources/audio/F-d1.mp3',
      secs: 1.0,
      });
  sound_7.setVolume(1.0);
  sound_8 = new sound.Sound({
      win: psychoJS.window,
      value: 'resources/audio/F-e.mp3',
      secs: 1.0,
      });
  sound_8.setVolume(1.0);
  sound_12 = new sound.Sound({
      win: psychoJS.window,
      value: 'resources/audio/F-g.mp3',
      secs: 1.0,
      });
  sound_12.setVolume(1.0);
  // Initialize components for Routine "instruction_1"
  instruction_1Clock = new util.Clock();
  // shuffle is push in JS so defining shuffle for our JS experiment code
  shuffle = util.shuffle;
  text_homebase = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_homebase',
    text: '欢迎您参加本任务。\n\n在这个任务中，我们将进行“颜色或形状”匹配游戏，\n\n但首先，让我们先学习一下按键，请把您的左手食指\n\n放在Z键上，并把右手食指放在M键上。\n\n\n按空格键继续。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  wecomle_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ShapeBoatEx"
  ShapeBoatExClock = new util.Clock();
  textBoat = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBoat',
    text: '首先是“形状”匹配游戏，在这个环节中，通过左右手按键，\n选择与中心图片形状相同的选项，如果中心图片是“帆船”，\n请通过按键M选择右侧的“帆船”选项。',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, 0.36], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  stimulus = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimulus', units : undefined, 
    image : 'resources/assets/RedBoat.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0.15], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'resources/assets/RedRabbitWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'resources/assets/BlueBoatWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  image_12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_12', units : undefined, 
    image : 'resources/assets/BlueBoatGreen.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  image_13 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_13', units : undefined, 
    image : 'resources/assets/BlueBoatWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  image_14 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_14', units : undefined, 
    image : 'resources/assets/BlueBoatGreen.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -6.0 
  });
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: '按M键继续',
    font: 'Heiti SC',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  // Initialize components for Routine "ShapeRabbitEx"
  ShapeRabbitExClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '如果中心图片是“兔子”，请通过按键Z选择左侧的“兔子”选项。',
    font: 'heiti sc',
    units: undefined, 
    pos: [0, 0.35], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'resources/assets/BlueRabbit.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0.15], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_10', units : undefined, 
    image : 'resources/assets/BlueBoatWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : 'resources/assets/RedRabbitWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  image_15 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_15', units : undefined, 
    image : 'resources/assets/RedRabbitGreen.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  image_16 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_16', units : undefined, 
    image : 'resources/assets/RedRabbitWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  image_17 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_17', units : undefined, 
    image : 'resources/assets/RedRabbitGreen.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -6.0 
  });
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: '按Z键继续',
    font: 'heiti sc',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : 'resources/assets/star_text.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.9, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  sound_2 = new sound.Sound({
      win: psychoJS.window,
      value: 'resources/audio/F11.mp3',
      secs: (- 1),
      });
  sound_2.setVolume(1.0);
  // Initialize components for Routine "InterTrial_Intreval"
  InterTrial_IntrevalClock = new util.Clock();
  image_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_6', units : undefined, 
    image : 'resources/assets/RedRabbitWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_7', units : undefined, 
    image : 'resources/assets/BlueBoatWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "ISIcode"
  ISIcodeClock = new util.Clock();
  // Initialize components for Routine "Fixation"
  FixationClock = new util.Clock();
  image_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_8', units : undefined, 
    image : 'resources/assets/star.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0.1], size : [0.05, 0.05],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_9', units : undefined, 
    image : 'resources/assets/RedRabbitWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_37 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_37', units : undefined, 
    image : 'resources/assets/BlueBoatWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "CueShape"
  CueShapeClock = new util.Clock();
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: '形状',
    font: 'heiti sc',
    units: undefined, 
    pos: [0, 0.1], height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  image_38 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_38', units : undefined, 
    image : 'resources/assets/RedRabbitWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_39 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_39', units : undefined, 
    image : 'resources/assets/BlueBoatWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Stim"
  StimClock = new util.Clock();
  image_40 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_40', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_41 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_41', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_42 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_42', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Feedback"
  FeedbackClock = new util.Clock();
  image_43 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_43', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_44 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_44', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  image_45 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_45', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  sound_9 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_9.setVolume(1.0);
  // Initialize components for Routine "UpdateAccuracy"
  UpdateAccuracyClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  counterOne = 0;
  counterTwo = 0;
  
  // Initialize components for Routine "continueStatus"
  continueStatusClock = new util.Clock();
  // Run 'Begin Experiment' code from code_11
  isForward = 0;
  
  text_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_24',
    text: '',
    font: 'heiti sc',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_18 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  sound_10 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_10.setVolume(1.0);
  // Initialize components for Routine "ColorRedEx"
  ColorRedExClock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '另一部分是“颜色”匹配游戏，在这个环节中，通过左右手按键，\n选择与中心图片颜色相同的选项，如果中心图片是“红色”，\n请通过按键Z选择下方左侧的“红色”选项。',
    font: 'heiti sc',
    units: undefined, 
    pos: [0, 0.36], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  image_18 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_18', units : undefined, 
    image : 'resources/assets/RedBoat.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0.15], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_20 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_20', units : undefined, 
    image : 'resources/assets/BlueBoatWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  image_19 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_19', units : undefined, 
    image : 'resources/assets/RedRabbitWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  image_21 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_21', units : undefined, 
    image : 'resources/assets/RedRabbitRed.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  image_22 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_22', units : undefined, 
    image : 'resources/assets/RedRabbitWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  image_23 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_23', units : undefined, 
    image : 'resources/assets/RedRabbitRed.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -6.0 
  });
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: '按Z键继续',
    font: 'heiti sc',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  // Initialize components for Routine "ColorBlueEx"
  ColorBlueExClock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: '如果中心图片是“蓝色”，请通过按键M选择下方右侧的“蓝色”选项。',
    font: 'heiti sc',
    units: undefined, 
    pos: [0, 0.41], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  image_24 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_24', units : undefined, 
    image : 'resources/assets/BlueRabbit.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0.2], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_25 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_25', units : undefined, 
    image : 'resources/assets/RedRabbitWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  image_26 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_26', units : undefined, 
    image : 'resources/assets/BlueBoatWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  image_27 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_27', units : undefined, 
    image : 'resources/assets/BlueBoatRed.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  image_28 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_28', units : undefined, 
    image : 'resources/assets/BlueBoatWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  image_29 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_29', units : undefined, 
    image : 'resources/assets/BlueBoatRed.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.2)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -6.0 
  });
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: '按M键继续',
    font: 'heiti sc',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  // Initialize components for Routine "CueColor"
  CueColorClock = new util.Clock();
  text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_16',
    text: '颜色',
    font: 'heiti sc',
    units: undefined, 
    pos: [0, 0.1], height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  image_46 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_46', units : undefined, 
    image : 'resources/assets/RedRabbitWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_47 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_47', units : undefined, 
    image : 'resources/assets/BlueBoatWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Stim2"
  Stim2Clock = new util.Clock();
  image_58 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_58', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_59 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_59', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_60 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_60', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Feedback2"
  Feedback2Clock = new util.Clock();
  image_61 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_61', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_62 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_62', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  image_63 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_63', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 1.0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  sound_1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_1.setVolume(1.0);
  // Initialize components for Routine "UpdateAccuracy2"
  UpdateAccuracy2Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_7
  counterOne = 0;
  counterTwo = 0;
  
  // Initialize components for Routine "ContStatus2"
  ContStatus2Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_4
  isForward = 0;
  
  text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_17',
    text: '',
    font: 'heiti sc',
    units: undefined, 
    pos: [0, 0.1], height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_16 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  sound_11 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_11.setVolume(1.0);
  // Initialize components for Routine "CombInstructions"
  CombInstructionsClock = new util.Clock();
  MainTaskPrompt = new visual.TextStim({
    win: psychoJS.window,
    name: 'MainTaskPrompt',
    text: '现在，我们将两个环节合并。\n请记住，如果提示词是“形状”，请选择和中心图形形状一样的选项；\n如果提示词是“颜色”，请选择和中心图形颜色一样的选项；\n\n还有，请保持左手食指在Z键上，右手食指在M键上。\n\n\n按空格键继续。\n',
    font: 'heiti sc',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions2"
  Instructions2Clock = new util.Clock();
  image_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_11', units : undefined, 
    image : 'resources/assets/star_text_formal.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.9, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  sound_3 = new sound.Sound({
      win: psychoJS.window,
      value: 'resources/audio/F12.mp3',
      secs: (- 1),
      });
  sound_3.setVolume(1.0);
  // Initialize components for Routine "countReset"
  countResetClock = new util.Clock();
  // Initialize components for Routine "ITI_Comb"
  ITI_CombClock = new util.Clock();
  image_65 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_65', units : undefined, 
    image : 'resources/assets/BlueBallWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_66 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_66', units : undefined, 
    image : 'resources/assets/YellowTruckWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "FixationComb_2"
  FixationComb_2Clock = new util.Clock();
  image_67 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_67', units : undefined, 
    image : 'resources/assets/star.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0.1], size : [0.05, 0.05],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_68 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_68', units : undefined, 
    image : 'resources/assets/BlueBallWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_69 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_69', units : undefined, 
    image : 'resources/assets/YellowTruckWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "cueComb_3"
  cueComb_3Clock = new util.Clock();
  image_75 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_75', units : undefined, 
    image : 'resources/assets/BlueBallWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_76 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_76', units : undefined, 
    image : 'resources/assets/YellowTruckWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  text_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_21',
    text: '',
    font: 'heiti sc',
    units: undefined, 
    pos: [0, 0.1], height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "PracticeComb_2"
  PracticeComb_2Clock = new util.Clock();
  image_72 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_72', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0, 0.15], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_73 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_73', units : undefined, 
    image : 'resources/assets/BlueBallWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_74 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_74', units : undefined, 
    image : 'resources/assets/YellowTruckWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  key_resp_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "stopColorLoop"
  stopColorLoopClock = new util.Clock();
  // Initialize components for Routine "cueComb_2"
  cueComb_2Clock = new util.Clock();
  image_70 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_70', units : undefined, 
    image : 'resources/assets/BlueBallWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [(- 0.4), (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_71 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_71', units : undefined, 
    image : 'resources/assets/YellowTruckWhite.png', mask : undefined,
    anchor : 'center',
    ori : 0, pos : [0.4, (- 0.21)], size : [0.3, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  text_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_20',
    text: '',
    font: 'heiti sc',
    units: undefined, 
    pos: [0, 0.1], height: 0.04,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "stopShapeLoop"
  stopShapeLoopClock = new util.Clock();
  // Initialize components for Routine "ThankYou"
  ThankYouClock = new util.Clock();
  text_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_19',
    text: '任务已经全部完成了，感谢您的参与！',
    font: 'heiti sc',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 0, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_3.forEach(function() {
      snapshot = trials_3.getSnapshot();
    
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(dummyRoutineBegin(snapshot));
      trials_3LoopScheduler.add(dummyRoutineEachFrame());
      trials_3LoopScheduler.add(dummyRoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var block;
function blockLoopBegin(blockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    block = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'block'
    });
    psychoJS.experiment.addLoop(block); // add the loop to the experiment
    currentLoop = block;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    block.forEach(function() {
      snapshot = block.getSnapshot();
    
      blockLoopScheduler.add(importConditions(snapshot));
      blockLoopScheduler.add(InstructionsRoutineBegin(snapshot));
      blockLoopScheduler.add(InstructionsRoutineEachFrame());
      blockLoopScheduler.add(InstructionsRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blockLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blockLoopScheduler.add(trialsLoopScheduler);
      blockLoopScheduler.add(trialsLoopEnd);
      blockLoopScheduler.add(continueStatusRoutineBegin(snapshot));
      blockLoopScheduler.add(continueStatusRoutineEachFrame());
      blockLoopScheduler.add(continueStatusRoutineEnd(snapshot));
      blockLoopScheduler.add(blockLoopEndIteration(blockLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/ShapePractTrial.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(InterTrial_IntrevalRoutineBegin(snapshot));
      trialsLoopScheduler.add(InterTrial_IntrevalRoutineEachFrame());
      trialsLoopScheduler.add(InterTrial_IntrevalRoutineEnd(snapshot));
      trialsLoopScheduler.add(ISIcodeRoutineBegin(snapshot));
      trialsLoopScheduler.add(ISIcodeRoutineEachFrame());
      trialsLoopScheduler.add(ISIcodeRoutineEnd(snapshot));
      trialsLoopScheduler.add(FixationRoutineBegin(snapshot));
      trialsLoopScheduler.add(FixationRoutineEachFrame());
      trialsLoopScheduler.add(FixationRoutineEnd(snapshot));
      trialsLoopScheduler.add(CueShapeRoutineBegin(snapshot));
      trialsLoopScheduler.add(CueShapeRoutineEachFrame());
      trialsLoopScheduler.add(CueShapeRoutineEnd(snapshot));
      trialsLoopScheduler.add(StimRoutineBegin(snapshot));
      trialsLoopScheduler.add(StimRoutineEachFrame());
      trialsLoopScheduler.add(StimRoutineEnd(snapshot));
      trialsLoopScheduler.add(FeedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(FeedbackRoutineEachFrame());
      trialsLoopScheduler.add(FeedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(UpdateAccuracyRoutineBegin(snapshot));
      trialsLoopScheduler.add(UpdateAccuracyRoutineEachFrame());
      trialsLoopScheduler.add(UpdateAccuracyRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blockLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(block);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blockLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var block2;
function block2LoopBegin(block2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    block2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'block2'
    });
    psychoJS.experiment.addLoop(block2); // add the loop to the experiment
    currentLoop = block2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    block2.forEach(function() {
      snapshot = block2.getSnapshot();
    
      block2LoopScheduler.add(importConditions(snapshot));
      block2LoopScheduler.add(InstructionsRoutineBegin(snapshot));
      block2LoopScheduler.add(InstructionsRoutineEachFrame());
      block2LoopScheduler.add(InstructionsRoutineEnd(snapshot));
      const trials_2LoopScheduler = new Scheduler(psychoJS);
      block2LoopScheduler.add(trials_2LoopBegin(trials_2LoopScheduler, snapshot));
      block2LoopScheduler.add(trials_2LoopScheduler);
      block2LoopScheduler.add(trials_2LoopEnd);
      block2LoopScheduler.add(ContStatus2RoutineBegin(snapshot));
      block2LoopScheduler.add(ContStatus2RoutineEachFrame());
      block2LoopScheduler.add(ContStatus2RoutineEnd(snapshot));
      block2LoopScheduler.add(block2LoopEndIteration(block2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/colorPract.csv',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(InterTrial_IntrevalRoutineBegin(snapshot));
      trials_2LoopScheduler.add(InterTrial_IntrevalRoutineEachFrame());
      trials_2LoopScheduler.add(InterTrial_IntrevalRoutineEnd(snapshot));
      trials_2LoopScheduler.add(ISIcodeRoutineBegin(snapshot));
      trials_2LoopScheduler.add(ISIcodeRoutineEachFrame());
      trials_2LoopScheduler.add(ISIcodeRoutineEnd(snapshot));
      trials_2LoopScheduler.add(FixationRoutineBegin(snapshot));
      trials_2LoopScheduler.add(FixationRoutineEachFrame());
      trials_2LoopScheduler.add(FixationRoutineEnd(snapshot));
      trials_2LoopScheduler.add(CueColorRoutineBegin(snapshot));
      trials_2LoopScheduler.add(CueColorRoutineEachFrame());
      trials_2LoopScheduler.add(CueColorRoutineEnd(snapshot));
      trials_2LoopScheduler.add(Stim2RoutineBegin(snapshot));
      trials_2LoopScheduler.add(Stim2RoutineEachFrame());
      trials_2LoopScheduler.add(Stim2RoutineEnd(snapshot));
      trials_2LoopScheduler.add(Feedback2RoutineBegin(snapshot));
      trials_2LoopScheduler.add(Feedback2RoutineEachFrame());
      trials_2LoopScheduler.add(Feedback2RoutineEnd(snapshot));
      trials_2LoopScheduler.add(UpdateAccuracy2RoutineBegin(snapshot));
      trials_2LoopScheduler.add(UpdateAccuracy2RoutineEachFrame());
      trials_2LoopScheduler.add(UpdateAccuracy2RoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function block2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(block2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function block2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var LoopSelectFreqNumber;
function LoopSelectFreqNumberLoopBegin(LoopSelectFreqNumberLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    LoopSelectFreqNumber = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/selectFreqNum.csv',
      seed: undefined, name: 'LoopSelectFreqNumber'
    });
    psychoJS.experiment.addLoop(LoopSelectFreqNumber); // add the loop to the experiment
    currentLoop = LoopSelectFreqNumber;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    LoopSelectFreqNumber.forEach(function() {
      snapshot = LoopSelectFreqNumber.getSnapshot();
    
      LoopSelectFreqNumberLoopScheduler.add(importConditions(snapshot));
      LoopSelectFreqNumberLoopScheduler.add(countResetRoutineBegin(snapshot));
      LoopSelectFreqNumberLoopScheduler.add(countResetRoutineEachFrame());
      LoopSelectFreqNumberLoopScheduler.add(countResetRoutineEnd(snapshot));
      const colorLoopLoopScheduler = new Scheduler(psychoJS);
      LoopSelectFreqNumberLoopScheduler.add(colorLoopLoopBegin(colorLoopLoopScheduler, snapshot));
      LoopSelectFreqNumberLoopScheduler.add(colorLoopLoopScheduler);
      LoopSelectFreqNumberLoopScheduler.add(colorLoopLoopEnd);
      const shapeLoopLoopScheduler = new Scheduler(psychoJS);
      LoopSelectFreqNumberLoopScheduler.add(shapeLoopLoopBegin(shapeLoopLoopScheduler, snapshot));
      LoopSelectFreqNumberLoopScheduler.add(shapeLoopLoopScheduler);
      LoopSelectFreqNumberLoopScheduler.add(shapeLoopLoopEnd);
      LoopSelectFreqNumberLoopScheduler.add(LoopSelectFreqNumberLoopEndIteration(LoopSelectFreqNumberLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var colorLoop;
function colorLoopLoopBegin(colorLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    colorLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/color.csv',
      seed: undefined, name: 'colorLoop'
    });
    psychoJS.experiment.addLoop(colorLoop); // add the loop to the experiment
    currentLoop = colorLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    colorLoop.forEach(function() {
      snapshot = colorLoop.getSnapshot();
    
      colorLoopLoopScheduler.add(importConditions(snapshot));
      colorLoopLoopScheduler.add(ITI_CombRoutineBegin(snapshot));
      colorLoopLoopScheduler.add(ITI_CombRoutineEachFrame());
      colorLoopLoopScheduler.add(ITI_CombRoutineEnd(snapshot));
      colorLoopLoopScheduler.add(ISIcodeRoutineBegin(snapshot));
      colorLoopLoopScheduler.add(ISIcodeRoutineEachFrame());
      colorLoopLoopScheduler.add(ISIcodeRoutineEnd(snapshot));
      colorLoopLoopScheduler.add(FixationComb_2RoutineBegin(snapshot));
      colorLoopLoopScheduler.add(FixationComb_2RoutineEachFrame());
      colorLoopLoopScheduler.add(FixationComb_2RoutineEnd(snapshot));
      colorLoopLoopScheduler.add(cueComb_3RoutineBegin(snapshot));
      colorLoopLoopScheduler.add(cueComb_3RoutineEachFrame());
      colorLoopLoopScheduler.add(cueComb_3RoutineEnd(snapshot));
      colorLoopLoopScheduler.add(PracticeComb_2RoutineBegin(snapshot));
      colorLoopLoopScheduler.add(PracticeComb_2RoutineEachFrame());
      colorLoopLoopScheduler.add(PracticeComb_2RoutineEnd(snapshot));
      colorLoopLoopScheduler.add(stopColorLoopRoutineBegin(snapshot));
      colorLoopLoopScheduler.add(stopColorLoopRoutineEachFrame());
      colorLoopLoopScheduler.add(stopColorLoopRoutineEnd(snapshot));
      colorLoopLoopScheduler.add(colorLoopLoopEndIteration(colorLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function colorLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(colorLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function colorLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var shapeLoop;
function shapeLoopLoopBegin(shapeLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    shapeLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/shape.csv',
      seed: undefined, name: 'shapeLoop'
    });
    psychoJS.experiment.addLoop(shapeLoop); // add the loop to the experiment
    currentLoop = shapeLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    shapeLoop.forEach(function() {
      snapshot = shapeLoop.getSnapshot();
    
      shapeLoopLoopScheduler.add(importConditions(snapshot));
      shapeLoopLoopScheduler.add(ITI_CombRoutineBegin(snapshot));
      shapeLoopLoopScheduler.add(ITI_CombRoutineEachFrame());
      shapeLoopLoopScheduler.add(ITI_CombRoutineEnd(snapshot));
      shapeLoopLoopScheduler.add(ISIcodeRoutineBegin(snapshot));
      shapeLoopLoopScheduler.add(ISIcodeRoutineEachFrame());
      shapeLoopLoopScheduler.add(ISIcodeRoutineEnd(snapshot));
      shapeLoopLoopScheduler.add(FixationComb_2RoutineBegin(snapshot));
      shapeLoopLoopScheduler.add(FixationComb_2RoutineEachFrame());
      shapeLoopLoopScheduler.add(FixationComb_2RoutineEnd(snapshot));
      shapeLoopLoopScheduler.add(cueComb_2RoutineBegin(snapshot));
      shapeLoopLoopScheduler.add(cueComb_2RoutineEachFrame());
      shapeLoopLoopScheduler.add(cueComb_2RoutineEnd(snapshot));
      shapeLoopLoopScheduler.add(PracticeComb_2RoutineBegin(snapshot));
      shapeLoopLoopScheduler.add(PracticeComb_2RoutineEachFrame());
      shapeLoopLoopScheduler.add(PracticeComb_2RoutineEnd(snapshot));
      shapeLoopLoopScheduler.add(stopShapeLoopRoutineBegin(snapshot));
      shapeLoopLoopScheduler.add(stopShapeLoopRoutineEachFrame());
      shapeLoopLoopScheduler.add(stopShapeLoopRoutineEnd(snapshot));
      shapeLoopLoopScheduler.add(shapeLoopLoopEndIteration(shapeLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function shapeLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(shapeLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function shapeLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function LoopSelectFreqNumberLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(LoopSelectFreqNumber);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function LoopSelectFreqNumberLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var dummyComponents;
function dummyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'dummy' ---
    t = 0;
    dummyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('dummy.started', globalClock.getTime());
    sound_4.secs=1.0;
    sound_4.setVolume(1.0);
    sound_5.secs=1.0;
    sound_5.setVolume(1.0);
    sound_6.secs=1.0;
    sound_6.setVolume(1.0);
    sound_7.secs=1.0;
    sound_7.setVolume(1.0);
    sound_8.secs=1.0;
    sound_8.setVolume(1.0);
    sound_12.secs=1.0;
    sound_12.setVolume(1.0);
    // keep track of which components have finished
    dummyComponents = [];
    dummyComponents.push(sound_4);
    dummyComponents.push(sound_5);
    dummyComponents.push(sound_6);
    dummyComponents.push(sound_7);
    dummyComponents.push(sound_8);
    dummyComponents.push(sound_12);
    
    dummyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function dummyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'dummy' ---
    // get current time
    t = dummyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop sound_4
    if (t >= 0.0 && sound_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_4.tStart = t;  // (not accounting for frame time here)
      sound_4.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_4.play(); });  // screen flip
      sound_4.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_4.tStart + 0.5) {
        sound_4.stop();  // stop the sound (if longer than duration)
        sound_4.status = PsychoJS.Status.FINISHED;
      }
    }
    // start/stop sound_5
    if (t >= 0.0 && sound_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_5.tStart = t;  // (not accounting for frame time here)
      sound_5.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_5.play(); });  // screen flip
      sound_5.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_5.tStart + 0.5) {
        sound_5.stop();  // stop the sound (if longer than duration)
        sound_5.status = PsychoJS.Status.FINISHED;
      }
    }
    // start/stop sound_6
    if (t >= 0.0 && sound_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_6.tStart = t;  // (not accounting for frame time here)
      sound_6.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_6.play(); });  // screen flip
      sound_6.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_6.tStart + 0.5) {
        sound_6.stop();  // stop the sound (if longer than duration)
        sound_6.status = PsychoJS.Status.FINISHED;
      }
    }
    // start/stop sound_7
    if (t >= 0.0 && sound_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_7.tStart = t;  // (not accounting for frame time here)
      sound_7.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_7.play(); });  // screen flip
      sound_7.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_7.tStart + 0.5) {
        sound_7.stop();  // stop the sound (if longer than duration)
        sound_7.status = PsychoJS.Status.FINISHED;
      }
    }
    // start/stop sound_8
    if (t >= 0.0 && sound_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_8.tStart = t;  // (not accounting for frame time here)
      sound_8.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_8.play(); });  // screen flip
      sound_8.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_8.tStart + 0.5) {
        sound_8.stop();  // stop the sound (if longer than duration)
        sound_8.status = PsychoJS.Status.FINISHED;
      }
    }
    // start/stop sound_12
    if (t >= 0.0 && sound_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_12.tStart = t;  // (not accounting for frame time here)
      sound_12.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_12.play(); });  // screen flip
      sound_12.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_12.tStart + 0.5) {
        sound_12.stop();  // stop the sound (if longer than duration)
        sound_12.status = PsychoJS.Status.FINISHED;
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    dummyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function dummyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'dummy' ---
    dummyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('dummy.stopped', globalClock.getTime());
    sound_4.stop();  // ensure sound has stopped at end of Routine
    sound_5.stop();  // ensure sound has stopped at end of Routine
    sound_6.stop();  // ensure sound has stopped at end of Routine
    sound_7.stop();  // ensure sound has stopped at end of Routine
    sound_8.stop();  // ensure sound has stopped at end of Routine
    sound_12.stop();  // ensure sound has stopped at end of Routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _wecomle_resp_allKeys;
var instruction_1Components;
function instruction_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_1' ---
    t = 0;
    instruction_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instruction_1.started', globalClock.getTime());
    wecomle_resp.keys = undefined;
    wecomle_resp.rt = undefined;
    _wecomle_resp_allKeys = [];
    // keep track of which components have finished
    instruction_1Components = [];
    instruction_1Components.push(text_homebase);
    instruction_1Components.push(wecomle_resp);
    
    instruction_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instruction_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_1' ---
    // get current time
    t = instruction_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_homebase* updates
    if (t >= 0.0 && text_homebase.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_homebase.tStart = t;  // (not accounting for frame time here)
      text_homebase.frameNStart = frameN;  // exact frame index
      
      text_homebase.setAutoDraw(true);
    }
    
    
    // *wecomle_resp* updates
    if (t >= 0.0 && wecomle_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wecomle_resp.tStart = t;  // (not accounting for frame time here)
      wecomle_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { wecomle_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { wecomle_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { wecomle_resp.clearEvents(); });
    }
    
    if (wecomle_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = wecomle_resp.getKeys({keyList: ['space'], waitRelease: false});
      _wecomle_resp_allKeys = _wecomle_resp_allKeys.concat(theseKeys);
      if (_wecomle_resp_allKeys.length > 0) {
        wecomle_resp.keys = _wecomle_resp_allKeys[_wecomle_resp_allKeys.length - 1].name;  // just the last key pressed
        wecomle_resp.rt = _wecomle_resp_allKeys[_wecomle_resp_allKeys.length - 1].rt;
        wecomle_resp.duration = _wecomle_resp_allKeys[_wecomle_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instruction_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_1' ---
    instruction_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction_1.stopped', globalClock.getTime());
    wecomle_resp.stop();
    // the Routine "instruction_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_8_allKeys;
var ShapeBoatExComponents;
function ShapeBoatExRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ShapeBoatEx' ---
    t = 0;
    ShapeBoatExClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ShapeBoatEx.started', globalClock.getTime());
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    ShapeBoatExComponents = [];
    ShapeBoatExComponents.push(textBoat);
    ShapeBoatExComponents.push(stimulus);
    ShapeBoatExComponents.push(image_2);
    ShapeBoatExComponents.push(image_3);
    ShapeBoatExComponents.push(image_12);
    ShapeBoatExComponents.push(image_13);
    ShapeBoatExComponents.push(image_14);
    ShapeBoatExComponents.push(key_resp_8);
    ShapeBoatExComponents.push(text_11);
    
    ShapeBoatExComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ShapeBoatExRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ShapeBoatEx' ---
    // get current time
    t = ShapeBoatExClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textBoat* updates
    if (t >= 0.0 && textBoat.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textBoat.tStart = t;  // (not accounting for frame time here)
      textBoat.frameNStart = frameN;  // exact frame index
      
      textBoat.setAutoDraw(true);
    }
    
    
    // *stimulus* updates
    if (t >= 0.0 && stimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimulus.tStart = t;  // (not accounting for frame time here)
      stimulus.frameNStart = frameN;  // exact frame index
      
      stimulus.setAutoDraw(true);
    }
    
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_3.setAutoDraw(false);
    }
    
    // *image_12* updates
    if (t >= 7 && image_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_12.tStart = t;  // (not accounting for frame time here)
      image_12.frameNStart = frameN;  // exact frame index
      
      image_12.setAutoDraw(true);
    }
    
    frameRemains = 7 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_12.setAutoDraw(false);
    }
    
    // *image_13* updates
    if (t >= 8 && image_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_13.tStart = t;  // (not accounting for frame time here)
      image_13.frameNStart = frameN;  // exact frame index
      
      image_13.setAutoDraw(true);
    }
    
    frameRemains = 8 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_13.setAutoDraw(false);
    }
    
    // *image_14* updates
    if (t >= 9 && image_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_14.tStart = t;  // (not accounting for frame time here)
      image_14.frameNStart = frameN;  // exact frame index
      
      image_14.setAutoDraw(true);
    }
    
    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }
    
    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['m'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        key_resp_8.duration = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ShapeBoatExComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ShapeBoatExRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ShapeBoatEx' ---
    ShapeBoatExComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ShapeBoatEx.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_8.corr, level);
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        psychoJS.experiment.addData('key_resp_8.duration', key_resp_8.duration);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "ShapeBoatEx" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_7_allKeys;
var ShapeRabbitExComponents;
function ShapeRabbitExRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ShapeRabbitEx' ---
    t = 0;
    ShapeRabbitExClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ShapeRabbitEx.started', globalClock.getTime());
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    ShapeRabbitExComponents = [];
    ShapeRabbitExComponents.push(text);
    ShapeRabbitExComponents.push(image);
    ShapeRabbitExComponents.push(image_10);
    ShapeRabbitExComponents.push(image_4);
    ShapeRabbitExComponents.push(image_15);
    ShapeRabbitExComponents.push(image_16);
    ShapeRabbitExComponents.push(image_17);
    ShapeRabbitExComponents.push(key_resp_7);
    ShapeRabbitExComponents.push(text_10);
    
    ShapeRabbitExComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ShapeRabbitExRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ShapeRabbitEx' ---
    // get current time
    t = ShapeRabbitExClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // *image_10* updates
    if (t >= 0.0 && image_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_10.tStart = t;  // (not accounting for frame time here)
      image_10.frameNStart = frameN;  // exact frame index
      
      image_10.setAutoDraw(true);
    }
    
    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_4.setAutoDraw(false);
    }
    
    // *image_15* updates
    if (t >= 2 && image_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_15.tStart = t;  // (not accounting for frame time here)
      image_15.frameNStart = frameN;  // exact frame index
      
      image_15.setAutoDraw(true);
    }
    
    frameRemains = 2 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_15.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_15.setAutoDraw(false);
    }
    
    // *image_16* updates
    if (t >= 3 && image_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_16.tStart = t;  // (not accounting for frame time here)
      image_16.frameNStart = frameN;  // exact frame index
      
      image_16.setAutoDraw(true);
    }
    
    frameRemains = 3 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_16.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_16.setAutoDraw(false);
    }
    
    // *image_17* updates
    if (t >= 4 && image_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_17.tStart = t;  // (not accounting for frame time here)
      image_17.frameNStart = frameN;  // exact frame index
      
      image_17.setAutoDraw(true);
    }
    
    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }
    
    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['z'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ShapeRabbitExComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ShapeRabbitExRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ShapeRabbitEx' ---
    ShapeRabbitExComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ShapeRabbitEx.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_7.corr, level);
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        psychoJS.experiment.addData('key_resp_7.duration', key_resp_7.duration);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "ShapeRabbitEx" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_2_allKeys;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions' ---
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions.started', globalClock.getTime());
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    sound_2.secs=20;
    sound_2.setVolume(1.0);
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(image_5);
    InstructionsComponents.push(key_resp_2);
    InstructionsComponents.push(sound_2);
    
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions' ---
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_5* updates
    if (t >= 0.0 && image_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_5.tStart = t;  // (not accounting for frame time here)
      image_5.frameNStart = frameN;  // exact frame index
      
      image_5.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop sound_2
    if (t >= 0.0 && sound_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_2.tStart = t;  // (not accounting for frame time here)
      sound_2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_2.play(); });  // screen flip
      sound_2.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_2.tStart + 0.5) {
        sound_2.stop();  // stop the sound (if longer than duration)
        sound_2.status = PsychoJS.Status.FINISHED;
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions' ---
    InstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    sound_2.stop();  // ensure sound has stopped at end of Routine
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var InterTrial_IntrevalComponents;
function InterTrial_IntrevalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'InterTrial_Intreval' ---
    t = 0;
    InterTrial_IntrevalClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.800000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('InterTrial_Intreval.started', globalClock.getTime());
    // keep track of which components have finished
    InterTrial_IntrevalComponents = [];
    InterTrial_IntrevalComponents.push(image_6);
    InterTrial_IntrevalComponents.push(image_7);
    
    InterTrial_IntrevalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InterTrial_IntrevalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'InterTrial_Intreval' ---
    // get current time
    t = InterTrial_IntrevalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_6* updates
    if (t >= 0.0 && image_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_6.tStart = t;  // (not accounting for frame time here)
      image_6.frameNStart = frameN;  // exact frame index
      
      image_6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_6.setAutoDraw(false);
    }
    
    // *image_7* updates
    if (t >= 0.0 && image_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_7.tStart = t;  // (not accounting for frame time here)
      image_7.frameNStart = frameN;  // exact frame index
      
      image_7.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_7.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InterTrial_IntrevalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InterTrial_IntrevalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'InterTrial_Intreval' ---
    InterTrial_IntrevalComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('InterTrial_Intreval.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ISIcodeComponents;
function ISIcodeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ISIcode' ---
    t = 0;
    ISIcodeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ISIcode.started', globalClock.getTime());
    // keep track of which components have finished
    ISIcodeComponents = [];
    
    ISIcodeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ISIcodeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ISIcode' ---
    // get current time
    t = ISIcodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ISIcodeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var ISIRange;
var thisISI;
function ISIcodeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ISIcode' ---
    ISIcodeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ISIcode.stopped', globalClock.getTime());
    // Run 'End Routine' code from pickISI
    ISIRange = linspace(1000, 1500, 500);
    shuffle(ISIRange);
    thisISI = (ISIRange[0] / 1000);
    console.log("thisISI: ", thisISI);
    trials.addData("ISI", thisISI);
    
    // the Routine "ISIcode" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FixationComponents;
function FixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Fixation' ---
    t = 0;
    FixationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Fixation.started', globalClock.getTime());
    // keep track of which components have finished
    FixationComponents = [];
    FixationComponents.push(image_8);
    FixationComponents.push(image_9);
    FixationComponents.push(image_37);
    
    FixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function FixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Fixation' ---
    // get current time
    t = FixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_8* updates
    if (t >= 0.0 && image_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_8.tStart = t;  // (not accounting for frame time here)
      image_8.frameNStart = frameN;  // exact frame index
      
      image_8.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + thisISI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_8.setAutoDraw(false);
    }
    
    // *image_9* updates
    if (t >= 0.0 && image_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_9.tStart = t;  // (not accounting for frame time here)
      image_9.frameNStart = frameN;  // exact frame index
      
      image_9.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + thisISI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_9.setAutoDraw(false);
    }
    
    // *image_37* updates
    if (t >= 0.0 && image_37.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_37.tStart = t;  // (not accounting for frame time here)
      image_37.frameNStart = frameN;  // exact frame index
      
      image_37.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + thisISI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_37.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_37.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    FixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Fixation' ---
    FixationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Fixation.stopped', globalClock.getTime());
    // the Routine "Fixation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var CueShapeComponents;
function CueShapeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CueShape' ---
    t = 0;
    CueShapeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('CueShape.started', globalClock.getTime());
    // keep track of which components have finished
    CueShapeComponents = [];
    CueShapeComponents.push(text_14);
    CueShapeComponents.push(image_38);
    CueShapeComponents.push(image_39);
    
    CueShapeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function CueShapeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CueShape' ---
    // get current time
    t = CueShapeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_14.setAutoDraw(false);
    }
    
    // *image_38* updates
    if (t >= 0.0 && image_38.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_38.tStart = t;  // (not accounting for frame time here)
      image_38.frameNStart = frameN;  // exact frame index
      
      image_38.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_38.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_38.setAutoDraw(false);
    }
    
    // *image_39* updates
    if (t >= 0.0 && image_39.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_39.tStart = t;  // (not accounting for frame time here)
      image_39.frameNStart = frameN;  // exact frame index
      
      image_39.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_39.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_39.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CueShapeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CueShapeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'CueShape' ---
    CueShapeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('CueShape.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_3_allKeys;
var StimComponents;
function StimRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Stim' ---
    t = 0;
    StimClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Stim.started', globalClock.getTime());
    image_40.setOpacity(1);
    image_40.setPos([0, 0.15]);
    image_40.setSize([0.3, 0.3]);
    image_40.setOri(0);
    image_40.setImage(middle);
    image_41.setOpacity(1);
    image_41.setPos([(- 0.4), (- 0.21)]);
    image_41.setSize([0.3, 0.3]);
    image_41.setOri(0);
    image_41.setImage(leftImg);
    image_42.setOpacity(1);
    image_42.setPos([0.4, (- 0.21)]);
    image_42.setSize([0.3, 0.3]);
    image_42.setOri(0);
    image_42.setImage(rightImg);
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    StimComponents = [];
    StimComponents.push(image_40);
    StimComponents.push(image_41);
    StimComponents.push(image_42);
    StimComponents.push(key_resp_3);
    
    StimComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function StimRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Stim' ---
    // get current time
    t = StimClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_40* updates
    if (t >= 0.0 && image_40.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_40.tStart = t;  // (not accounting for frame time here)
      image_40.frameNStart = frameN;  // exact frame index
      
      image_40.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_40.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_40.setAutoDraw(false);
    }
    
    // *image_41* updates
    if (t >= 0.0 && image_41.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_41.tStart = t;  // (not accounting for frame time here)
      image_41.frameNStart = frameN;  // exact frame index
      
      image_41.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_41.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_41.setAutoDraw(false);
    }
    
    // *image_42* updates
    if (t >= 0.0 && image_42.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_42.tStart = t;  // (not accounting for frame time here)
      image_42.frameNStart = frameN;  // exact frame index
      
      image_42.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_42.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_42.setAutoDraw(false);
    }
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_3.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_3.keys == corrAns) {
            key_resp_3.corr = 1;
        } else {
            key_resp_3.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    StimComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function StimRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Stim' ---
    StimComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Stim.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_3.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         key_resp_3.corr = 1;  // correct non-response
      } else {
         key_resp_3.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    psychoJS.experiment.addData('key_resp_3.corr', key_resp_3.corr);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var left;
var right;
var audio;
var FeedbackComponents;
function FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Feedback' ---
    t = 0;
    FeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Feedback.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_2
    if (key_resp_3.keys) {
        if ((key_resp_3.keys[0] === "z")) {
            if (key_resp_3.corr) {
                left = "resources/assets/RedRabbitGreen.png";
                right = "resources/assets/BlueBoatWhite.png";
                audio = "resources/audio/F-b.mp3";
            } else {
                left = "resources/assets/RedRabbitRed.png";
                right = "resources/assets/BlueBoatWhite.png";
                audio = "resources/audio/F-a.mp3";
            }
        } else {
            if ((key_resp_3.keys[0] === "m")) {
                if (key_resp_3.corr) {
                    right = "resources/assets/BlueBoatGreen.png";
                    left = "resources/assets/RedRabbitWhite.png";
                    audio = "resources/audio/F-b.mp3";
                } else {
                    left = "resources/assets/RedRabbitWhite.png";
                    right = "resources/assets/BlueBoatRed.png";
                    audio = "resources/audio/F-a.mp3";
                }
            }
        }
    } else {
        if ((corrAns === "m")) {
            right = "resources/assets/BlueBoatRed.png";
            left = "resources/assets/RedRabbitWhite.png";
            audio = "resources/audio/F-a.mp3";
        } else {
            left = "resources/assets/RedRabbitRed.png";
            right = "resources/assets/BlueBoatWhite.png";
            audio = "resources/audio/F-a.mp3";
        }
    }
    
    image_43.setOpacity(1);
    image_43.setPos([0, 0.15]);
    image_43.setSize([0.3, 0.3]);
    image_43.setOri(0);
    image_43.setImage(middle);
    image_44.setOpacity(1);
    image_44.setPos([(- 0.4), (- 0.21)]);
    image_44.setSize([0.3, 0.3]);
    image_44.setOri(0);
    image_44.setImage(left);
    image_45.setOpacity(1);
    image_45.setPos([0.4, (- 0.21)]);
    image_45.setSize([0.3, 0.3]);
    image_45.setOri(0);
    image_45.setImage(right);
    sound_9.setValue(audio);
    sound_9.secs=4;
    sound_9.setVolume(1);
    // keep track of which components have finished
    FeedbackComponents = [];
    FeedbackComponents.push(image_43);
    FeedbackComponents.push(image_44);
    FeedbackComponents.push(image_45);
    FeedbackComponents.push(sound_9);
    
    FeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function FeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Feedback' ---
    // get current time
    t = FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_43* updates
    if (t >= 0.0 && image_43.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_43.tStart = t;  // (not accounting for frame time here)
      image_43.frameNStart = frameN;  // exact frame index
      
      image_43.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_43.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_43.setAutoDraw(false);
    }
    
    // *image_44* updates
    if (t >= 0.0 && image_44.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_44.tStart = t;  // (not accounting for frame time here)
      image_44.frameNStart = frameN;  // exact frame index
      
      image_44.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_44.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_44.setAutoDraw(false);
    }
    
    // *image_45* updates
    if (t >= 0.0 && image_45.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_45.tStart = t;  // (not accounting for frame time here)
      image_45.frameNStart = frameN;  // exact frame index
      
      image_45.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_45.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_45.setAutoDraw(false);
    }
    // start/stop sound_9
    if (t >= 0 && sound_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_9.tStart = t;  // (not accounting for frame time here)
      sound_9.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_9.play(); });  // screen flip
      sound_9.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_9.tStart + 0.5) {
        sound_9.stop();  // stop the sound (if longer than duration)
        sound_9.status = PsychoJS.Status.FINISHED;
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    FeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Feedback' ---
    FeedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Feedback.stopped', globalClock.getTime());
    sound_9.stop();  // ensure sound has stopped at end of Routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var UpdateAccuracyComponents;
function UpdateAccuracyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'UpdateAccuracy' ---
    t = 0;
    UpdateAccuracyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('UpdateAccuracy.started', globalClock.getTime());
    // Run 'Begin Routine' code from code
    if (key_resp_3.keys) {
        if (key_resp_3.corr) {
            counterOne += 1;
        } else {
            counterTwo += 1;
        }
    } else {
        key_resp_3.corr = 0;
        counterTwo += 1;
    }
    
    // keep track of which components have finished
    UpdateAccuracyComponents = [];
    
    UpdateAccuracyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function UpdateAccuracyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'UpdateAccuracy' ---
    // get current time
    t = UpdateAccuracyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    UpdateAccuracyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function UpdateAccuracyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'UpdateAccuracy' ---
    UpdateAccuracyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('UpdateAccuracy.stopped', globalClock.getTime());
    // the Routine "UpdateAccuracy" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var outPut;
var _key_resp_18_allKeys;
var continueStatusComponents;
function continueStatusRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'continueStatus' ---
    t = 0;
    continueStatusClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('continueStatus.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_11
    if ((counterOne >= 3)) {
        outPut = (((((("\u505a\u5f97\u597d" + "\n") + "\n") + "\u8ba9\u6211\u4eec\u5f00\u59cb\u4e0b\u4e00\u90e8\u5206\u7684\u7ec3\u4e60") + "\n") + "\n") + "\u6309\u7a7a\u683c\u952e\u7ee7\u7eed\u3002");
        audio = "resources/audio/F-d1.mp3";
        block.finished = true;
    }
    if ((counterTwo > 1)) {
        outPut = (((("\u5f88\u9057\u61be\uff0c\u8fd9\u6b21\u7ec3\u4e60\u5931\u8d25\u4e86\uff0c\u8ba9\u6211\u4eec\u518d\u8bd5\u4e00\u6b21\u3002" + "\n") + "\n") + "\n") + "\u6309\u7a7a\u683c\u952e\u7ee7\u7eed\u3002");
        audio = "resources/audio/F-e.mp3";
        isForward += 1;
        block.finished = false;
        counterOne = 0;
        counterTwo = 0;
        if ((isForward === 3)) {
            outPut = ((("\u5f88\u9057\u61be\uff0c\u60a8\u6ca1\u80fd\u901a\u8fc7\u7ec3\u4e60\u73af\u8282\u3002" + "\n") + "\n") + "\u4efb\u52a1\u7ed3\u675f\uff0c\u611f\u8c22\u60a8\u7684\u53c2\u4e0e\u3002");
            audio = "resources/audio/F-g.mp3";
            block.finished = true;
        }
    }
    
    key_resp_18.keys = undefined;
    key_resp_18.rt = undefined;
    _key_resp_18_allKeys = [];
    sound_10.setValue(audio);
    sound_10.secs=20;
    sound_10.setVolume(1.0);
    // keep track of which components have finished
    continueStatusComponents = [];
    continueStatusComponents.push(text_24);
    continueStatusComponents.push(key_resp_18);
    continueStatusComponents.push(sound_10);
    
    continueStatusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function continueStatusRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'continueStatus' ---
    // get current time
    t = continueStatusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    if (text_24.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_24.setText(outPut, false);
    }
    
    // *text_24* updates
    if (t >= 0.0 && text_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_24.tStart = t;  // (not accounting for frame time here)
      text_24.frameNStart = frameN;  // exact frame index
      
      text_24.setAutoDraw(true);
    }
    
    
    // *key_resp_18* updates
    if (t >= 0.0 && key_resp_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_18.tStart = t;  // (not accounting for frame time here)
      key_resp_18.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_18.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_18.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_18.clearEvents(); });
    }
    
    if (key_resp_18.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_18.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_18_allKeys = _key_resp_18_allKeys.concat(theseKeys);
      if (_key_resp_18_allKeys.length > 0) {
        key_resp_18.keys = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].name;  // just the last key pressed
        key_resp_18.rt = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].rt;
        key_resp_18.duration = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop sound_10
    if (t >= 0.0 && sound_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_10.tStart = t;  // (not accounting for frame time here)
      sound_10.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_10.play(); });  // screen flip
      sound_10.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_10.tStart + 0.5) {
        sound_10.stop();  // stop the sound (if longer than duration)
        sound_10.status = PsychoJS.Status.FINISHED;
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    continueStatusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function continueStatusRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'continueStatus' ---
    continueStatusComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('continueStatus.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_12
    if ((isForward === 3)) {
        psychoJS.quit();
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_18.corr, level);
    }
    psychoJS.experiment.addData('key_resp_18.keys', key_resp_18.keys);
    if (typeof key_resp_18.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_18.rt', key_resp_18.rt);
        psychoJS.experiment.addData('key_resp_18.duration', key_resp_18.duration);
        routineTimer.reset();
        }
    
    key_resp_18.stop();
    sound_10.stop();  // ensure sound has stopped at end of Routine
    // the Routine "continueStatus" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_9_allKeys;
var ColorRedExComponents;
function ColorRedExRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ColorRedEx' ---
    t = 0;
    ColorRedExClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ColorRedEx.started', globalClock.getTime());
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // keep track of which components have finished
    ColorRedExComponents = [];
    ColorRedExComponents.push(text_7);
    ColorRedExComponents.push(image_18);
    ColorRedExComponents.push(image_20);
    ColorRedExComponents.push(image_19);
    ColorRedExComponents.push(image_21);
    ColorRedExComponents.push(image_22);
    ColorRedExComponents.push(image_23);
    ColorRedExComponents.push(key_resp_9);
    ColorRedExComponents.push(text_12);
    
    ColorRedExComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ColorRedExRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ColorRedEx' ---
    // get current time
    t = ColorRedExClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    
    // *image_18* updates
    if (t >= 0.0 && image_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_18.tStart = t;  // (not accounting for frame time here)
      image_18.frameNStart = frameN;  // exact frame index
      
      image_18.setAutoDraw(true);
    }
    
    
    // *image_20* updates
    if (t >= 0.0 && image_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_20.tStart = t;  // (not accounting for frame time here)
      image_20.frameNStart = frameN;  // exact frame index
      
      image_20.setAutoDraw(true);
    }
    
    
    // *image_19* updates
    if (t >= 0.0 && image_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_19.tStart = t;  // (not accounting for frame time here)
      image_19.frameNStart = frameN;  // exact frame index
      
      image_19.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_19.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_19.setAutoDraw(false);
    }
    
    // *image_21* updates
    if (t >= 7 && image_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_21.tStart = t;  // (not accounting for frame time here)
      image_21.frameNStart = frameN;  // exact frame index
      
      image_21.setAutoDraw(true);
    }
    
    frameRemains = 7 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_21.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_21.setAutoDraw(false);
    }
    
    // *image_22* updates
    if (t >= 8 && image_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_22.tStart = t;  // (not accounting for frame time here)
      image_22.frameNStart = frameN;  // exact frame index
      
      image_22.setAutoDraw(true);
    }
    
    frameRemains = 8 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_22.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_22.setAutoDraw(false);
    }
    
    // *image_23* updates
    if (t >= 9 && image_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_23.tStart = t;  // (not accounting for frame time here)
      image_23.frameNStart = frameN;  // exact frame index
      
      image_23.setAutoDraw(true);
    }
    
    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }
    
    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['z'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        key_resp_9.duration = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ColorRedExComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ColorRedExRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ColorRedEx' ---
    ColorRedExComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ColorRedEx.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_9.corr, level);
    }
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        psychoJS.experiment.addData('key_resp_9.duration', key_resp_9.duration);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "ColorRedEx" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_10_allKeys;
var ColorBlueExComponents;
function ColorBlueExRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ColorBlueEx' ---
    t = 0;
    ColorBlueExClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ColorBlueEx.started', globalClock.getTime());
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    ColorBlueExComponents = [];
    ColorBlueExComponents.push(text_8);
    ColorBlueExComponents.push(image_24);
    ColorBlueExComponents.push(image_25);
    ColorBlueExComponents.push(image_26);
    ColorBlueExComponents.push(image_27);
    ColorBlueExComponents.push(image_28);
    ColorBlueExComponents.push(image_29);
    ColorBlueExComponents.push(key_resp_10);
    ColorBlueExComponents.push(text_13);
    
    ColorBlueExComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ColorBlueExRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ColorBlueEx' ---
    // get current time
    t = ColorBlueExClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    
    // *image_24* updates
    if (t >= 0.0 && image_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_24.tStart = t;  // (not accounting for frame time here)
      image_24.frameNStart = frameN;  // exact frame index
      
      image_24.setAutoDraw(true);
    }
    
    
    // *image_25* updates
    if (t >= 0.0 && image_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_25.tStart = t;  // (not accounting for frame time here)
      image_25.frameNStart = frameN;  // exact frame index
      
      image_25.setAutoDraw(true);
    }
    
    
    // *image_26* updates
    if (t >= 0.0 && image_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_26.tStart = t;  // (not accounting for frame time here)
      image_26.frameNStart = frameN;  // exact frame index
      
      image_26.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_26.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_26.setAutoDraw(false);
    }
    
    // *image_27* updates
    if (t >= 2 && image_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_27.tStart = t;  // (not accounting for frame time here)
      image_27.frameNStart = frameN;  // exact frame index
      
      image_27.setAutoDraw(true);
    }
    
    frameRemains = 2 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_27.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_27.setAutoDraw(false);
    }
    
    // *image_28* updates
    if (t >= 3 && image_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_28.tStart = t;  // (not accounting for frame time here)
      image_28.frameNStart = frameN;  // exact frame index
      
      image_28.setAutoDraw(true);
    }
    
    frameRemains = 3 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_28.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_28.setAutoDraw(false);
    }
    
    // *image_29* updates
    if (t >= 4 && image_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_29.tStart = t;  // (not accounting for frame time here)
      image_29.frameNStart = frameN;  // exact frame index
      
      image_29.setAutoDraw(true);
    }
    
    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }
    
    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['m'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        key_resp_10.duration = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ColorBlueExComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ColorBlueExRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ColorBlueEx' ---
    ColorBlueExComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ColorBlueEx.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_10.corr, level);
    }
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        psychoJS.experiment.addData('key_resp_10.duration', key_resp_10.duration);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "ColorBlueEx" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var CueColorComponents;
function CueColorRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CueColor' ---
    t = 0;
    CueColorClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('CueColor.started', globalClock.getTime());
    // keep track of which components have finished
    CueColorComponents = [];
    CueColorComponents.push(text_16);
    CueColorComponents.push(image_46);
    CueColorComponents.push(image_47);
    
    CueColorComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function CueColorRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CueColor' ---
    // get current time
    t = CueColorClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_16* updates
    if (t >= 0.0 && text_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_16.tStart = t;  // (not accounting for frame time here)
      text_16.frameNStart = frameN;  // exact frame index
      
      text_16.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_16.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_16.setAutoDraw(false);
    }
    
    // *image_46* updates
    if (t >= 0.0 && image_46.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_46.tStart = t;  // (not accounting for frame time here)
      image_46.frameNStart = frameN;  // exact frame index
      
      image_46.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_46.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_46.setAutoDraw(false);
    }
    
    // *image_47* updates
    if (t >= 0.0 && image_47.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_47.tStart = t;  // (not accounting for frame time here)
      image_47.frameNStart = frameN;  // exact frame index
      
      image_47.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_47.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_47.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CueColorComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CueColorRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'CueColor' ---
    CueColorComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('CueColor.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_12_allKeys;
var Stim2Components;
function Stim2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Stim2' ---
    t = 0;
    Stim2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Stim2.started', globalClock.getTime());
    image_58.setOpacity(1);
    image_58.setPos([0, 0.15]);
    image_58.setSize([0.3, 0.3]);
    image_58.setOri(0);
    image_58.setImage(middle);
    image_59.setOpacity(1);
    image_59.setPos([(- 0.4), (- 0.21)]);
    image_59.setSize([0.3, 0.3]);
    image_59.setOri(0);
    image_59.setImage(leftimg);
    image_60.setOpacity(1);
    image_60.setPos([0.4, (- 0.21)]);
    image_60.setSize([0.3, 0.3]);
    image_60.setOri(0);
    image_60.setImage(rightimg);
    key_resp_12.keys = undefined;
    key_resp_12.rt = undefined;
    _key_resp_12_allKeys = [];
    // keep track of which components have finished
    Stim2Components = [];
    Stim2Components.push(image_58);
    Stim2Components.push(image_59);
    Stim2Components.push(image_60);
    Stim2Components.push(key_resp_12);
    
    Stim2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Stim2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Stim2' ---
    // get current time
    t = Stim2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_58* updates
    if (t >= 0.0 && image_58.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_58.tStart = t;  // (not accounting for frame time here)
      image_58.frameNStart = frameN;  // exact frame index
      
      image_58.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_58.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_58.setAutoDraw(false);
    }
    
    // *image_59* updates
    if (t >= 0.0 && image_59.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_59.tStart = t;  // (not accounting for frame time here)
      image_59.frameNStart = frameN;  // exact frame index
      
      image_59.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_59.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_59.setAutoDraw(false);
    }
    
    // *image_60* updates
    if (t >= 0.0 && image_60.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_60.tStart = t;  // (not accounting for frame time here)
      image_60.frameNStart = frameN;  // exact frame index
      
      image_60.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_60.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_60.setAutoDraw(false);
    }
    
    // *key_resp_12* updates
    if (t >= 0.0 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_12.tStart = t;  // (not accounting for frame time here)
      key_resp_12.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.clearEvents(); });
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_12.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_12.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_12.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _key_resp_12_allKeys = _key_resp_12_allKeys.concat(theseKeys);
      if (_key_resp_12_allKeys.length > 0) {
        key_resp_12.keys = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].name;  // just the last key pressed
        key_resp_12.rt = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].rt;
        key_resp_12.duration = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_12.keys == corrAns) {
            key_resp_12.corr = 1;
        } else {
            key_resp_12.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Stim2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Stim2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Stim2' ---
    Stim2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Stim2.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_12.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         key_resp_12.corr = 1;  // correct non-response
      } else {
         key_resp_12.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_12.corr, level);
    }
    psychoJS.experiment.addData('key_resp_12.keys', key_resp_12.keys);
    psychoJS.experiment.addData('key_resp_12.corr', key_resp_12.corr);
    if (typeof key_resp_12.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_12.rt', key_resp_12.rt);
        psychoJS.experiment.addData('key_resp_12.duration', key_resp_12.duration);
        routineTimer.reset();
        }
    
    key_resp_12.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var audio1;
var Feedback2Components;
function Feedback2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Feedback2' ---
    t = 0;
    Feedback2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Feedback2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_6
    if (key_resp_12.keys) {
        if ((key_resp_12.keys[0] === "z")) {
            if (key_resp_12.corr) {
                left = "resources/assets/RedRabbitGreen.png";
                right = "resources/assets/BlueBoatWhite.png";
                audio1 = "resources/audio/F-b.mp3";
            } else {
                left = "resources/assets/RedRabbitRed.png";
                right = "resources/assets/BlueBoatWhite.png";
                audio1 = "resources/audio/F-a.mp3";
            }
        } else {
            if ((key_resp_12.keys[0] === "m")) {
                if (key_resp_12.corr) {
                    right = "resources/assets/BlueBoatGreen.png";
                    left = "resources/assets/RedRabbitWhite.png";
                    audio1 = "resources/audio/F-b.mp3";
                } else {
                    left = "resources/assets/RedRabbitRed.png";
                    right = "resources/assets/BlueBoatWhite.png";
                    audio1 = "resources/audio/F-a.mp3";
                }
            }
        }
    } else {
        if ((corrAns === "m")) {
            right = "resources/assets/BlueBoatRed.png";
            left = "resources/assets/RedRabbitWhite.png";
            audio1 = "resources/audio/F-a.mp3";
        } else {
            left = "resources/assets/RedRabbitRed.png";
            right = "resources/assets/BlueBoatWhite.png";
            audio1 = "resources/audio/F-a.mp3";
        }
    }
    
    image_61.setOpacity(1);
    image_61.setPos([0, 0.15]);
    image_61.setSize([0.3, 0.3]);
    image_61.setOri(0);
    image_61.setImage(middle);
    image_62.setOpacity(1);
    image_62.setPos([(- 0.4), (- 0.21)]);
    image_62.setSize([0.3, 0.3]);
    image_62.setOri(0);
    image_62.setImage(left);
    image_63.setOpacity(1);
    image_63.setPos([0.4, (- 0.21)]);
    image_63.setSize([0.3, 0.3]);
    image_63.setOri(0);
    image_63.setImage(right);
    sound_1.setValue(audio1);
    sound_1.secs=4;
    sound_1.setVolume(1.0);
    // keep track of which components have finished
    Feedback2Components = [];
    Feedback2Components.push(image_61);
    Feedback2Components.push(image_62);
    Feedback2Components.push(image_63);
    Feedback2Components.push(sound_1);
    
    Feedback2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Feedback2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Feedback2' ---
    // get current time
    t = Feedback2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_61* updates
    if (t >= 0.0 && image_61.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_61.tStart = t;  // (not accounting for frame time here)
      image_61.frameNStart = frameN;  // exact frame index
      
      image_61.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_61.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_61.setAutoDraw(false);
    }
    
    // *image_62* updates
    if (t >= 0.0 && image_62.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_62.tStart = t;  // (not accounting for frame time here)
      image_62.frameNStart = frameN;  // exact frame index
      
      image_62.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_62.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_62.setAutoDraw(false);
    }
    
    // *image_63* updates
    if (t >= 0.0 && image_63.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_63.tStart = t;  // (not accounting for frame time here)
      image_63.frameNStart = frameN;  // exact frame index
      
      image_63.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_63.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_63.setAutoDraw(false);
    }
    // start/stop sound_1
    if (t >= 0.0 && sound_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_1.tStart = t;  // (not accounting for frame time here)
      sound_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_1.play(); });  // screen flip
      sound_1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_1.tStart + 0.5) {
        sound_1.stop();  // stop the sound (if longer than duration)
        sound_1.status = PsychoJS.Status.FINISHED;
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Feedback2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Feedback2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Feedback2' ---
    Feedback2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Feedback2.stopped', globalClock.getTime());
    sound_1.stop();  // ensure sound has stopped at end of Routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var UpdateAccuracy2Components;
function UpdateAccuracy2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'UpdateAccuracy2' ---
    t = 0;
    UpdateAccuracy2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('UpdateAccuracy2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_7
    if (key_resp_12.keys) {
        if (key_resp_12.corr) {
            counterOne += 1;
        } else {
            counterTwo += 1;
        }
    } else {
        key_resp_12.corr = 0;
        counterTwo += 1;
    }
    
    // keep track of which components have finished
    UpdateAccuracy2Components = [];
    
    UpdateAccuracy2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function UpdateAccuracy2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'UpdateAccuracy2' ---
    // get current time
    t = UpdateAccuracy2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    UpdateAccuracy2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function UpdateAccuracy2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'UpdateAccuracy2' ---
    UpdateAccuracy2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('UpdateAccuracy2.stopped', globalClock.getTime());
    // the Routine "UpdateAccuracy2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_16_allKeys;
var ContStatus2Components;
function ContStatus2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ContStatus2' ---
    t = 0;
    ContStatus2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ContStatus2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_4
    if ((counterOne >= 3)) {
        outPut = (((((("\u505a\u5f97\u597d\uff0c\u7ec3\u4e60\u7ed3\u675f\u4e86\u3002" + "\n") + "\n") + "\u8ba9\u6211\u4eec\u5f00\u59cb\u6b63\u5f0f\u5b9e\u9a8c\u5427!") + "\n") + "\n") + "\u6309\u7a7a\u683c\u952e\u7ee7\u7eed\u3002");
        audio = "resources/audio/F-d.mp3";
        block2.finished = true;
    }
    if ((counterTwo > 1)) {
        outPut = (((("\u5f88\u9057\u61be\uff0c\u8fd9\u6b21\u7ec3\u4e60\u5931\u8d25\u4e86\uff0c\u8ba9\u6211\u4eec\u518d\u8bd5\u4e00\u6b21\u3002" + "\n") + "\n") + "\n") + "\u6309\u7a7a\u683c\u952e\u7ee7\u7eed\u3002");
        audio = "resources/audio/F-e.mp3";
        isForward += 1;
        block2.finished = false;
        counterOne = 0;
        counterTwo = 0;
        if ((isForward === 3)) {
            outPut = ((("\u5f88\u9057\u61be\uff0c\u60a8\u6ca1\u80fd\u901a\u8fc7\u7ec3\u4e60\u73af\u8282\u3002" + "\n") + "\n") + "\u4efb\u52a1\u7ed3\u675f\uff0c\u611f\u8c22\u60a8\u7684\u53c2\u4e0e\u3002");
            audio = "resources/audio/F-g.mp3";
            block.finished = true;
        }
    }
    
    key_resp_16.keys = undefined;
    key_resp_16.rt = undefined;
    _key_resp_16_allKeys = [];
    sound_11.setValue(audio);
    sound_11.secs=20;
    sound_11.setVolume(1.0);
    // keep track of which components have finished
    ContStatus2Components = [];
    ContStatus2Components.push(text_17);
    ContStatus2Components.push(key_resp_16);
    ContStatus2Components.push(sound_11);
    
    ContStatus2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ContStatus2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ContStatus2' ---
    // get current time
    t = ContStatus2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    if (text_17.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_17.setText(outPut, false);
    }
    
    // *text_17* updates
    if (t >= 0.0 && text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_17.tStart = t;  // (not accounting for frame time here)
      text_17.frameNStart = frameN;  // exact frame index
      
      text_17.setAutoDraw(true);
    }
    
    
    // *key_resp_16* updates
    if (t >= 0.0 && key_resp_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_16.tStart = t;  // (not accounting for frame time here)
      key_resp_16.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_16.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_16.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_16.clearEvents(); });
    }
    
    if (key_resp_16.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_16.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_16_allKeys = _key_resp_16_allKeys.concat(theseKeys);
      if (_key_resp_16_allKeys.length > 0) {
        key_resp_16.keys = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].name;  // just the last key pressed
        key_resp_16.rt = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].rt;
        key_resp_16.duration = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop sound_11
    if (t >= 0.0 && sound_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_11.tStart = t;  // (not accounting for frame time here)
      sound_11.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_11.play(); });  // screen flip
      sound_11.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_11.tStart + 0.5) {
        sound_11.stop();  // stop the sound (if longer than duration)
        sound_11.status = PsychoJS.Status.FINISHED;
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ContStatus2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ContStatus2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ContStatus2' ---
    ContStatus2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ContStatus2.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_8
    if ((isForward === 3)) {
        psychoJS.quit();
    }
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_16.corr, level);
    }
    psychoJS.experiment.addData('key_resp_16.keys', key_resp_16.keys);
    if (typeof key_resp_16.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_16.rt', key_resp_16.rt);
        psychoJS.experiment.addData('key_resp_16.duration', key_resp_16.duration);
        routineTimer.reset();
        }
    
    key_resp_16.stop();
    sound_11.stop();  // ensure sound has stopped at end of Routine
    // the Routine "ContStatus2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_4_allKeys;
var CombInstructionsComponents;
function CombInstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CombInstructions' ---
    t = 0;
    CombInstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('CombInstructions.started', globalClock.getTime());
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    CombInstructionsComponents = [];
    CombInstructionsComponents.push(MainTaskPrompt);
    CombInstructionsComponents.push(key_resp_4);
    
    CombInstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function CombInstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CombInstructions' ---
    // get current time
    t = CombInstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *MainTaskPrompt* updates
    if (t >= 0.0 && MainTaskPrompt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MainTaskPrompt.tStart = t;  // (not accounting for frame time here)
      MainTaskPrompt.frameNStart = frameN;  // exact frame index
      
      MainTaskPrompt.setAutoDraw(true);
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CombInstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CombInstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'CombInstructions' ---
    CombInstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('CombInstructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "CombInstructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_allKeys;
var Instructions2Components;
function Instructions2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions2' ---
    t = 0;
    Instructions2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions2.started', globalClock.getTime());
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    sound_3.secs=20;
    sound_3.setVolume(1.0);
    // keep track of which components have finished
    Instructions2Components = [];
    Instructions2Components.push(image_11);
    Instructions2Components.push(key_resp);
    Instructions2Components.push(sound_3);
    
    Instructions2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instructions2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions2' ---
    // get current time
    t = Instructions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_11* updates
    if (t >= 0.0 && image_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_11.tStart = t;  // (not accounting for frame time here)
      image_11.frameNStart = frameN;  // exact frame index
      
      image_11.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop sound_3
    if (t >= 0.0 && sound_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_3.tStart = t;  // (not accounting for frame time here)
      sound_3.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_3.play(); });  // screen flip
      sound_3.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_3.tStart + 0.5) {
        sound_3.stop();  // stop the sound (if longer than duration)
        sound_3.status = PsychoJS.Status.FINISHED;
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instructions2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions2' ---
    Instructions2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    sound_3.stop();  // ensure sound has stopped at end of Routine
    // the Routine "Instructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var colorLoopCounter;
var shapeLoopCounter;
var countResetComponents;
function countResetRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'countReset' ---
    t = 0;
    countResetClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('countReset.started', globalClock.getTime());
    // Run 'Begin Routine' code from resetLoopCounters
    colorLoopCounter = 0;
    shapeLoopCounter = 0;
    
    // keep track of which components have finished
    countResetComponents = [];
    
    countResetComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function countResetRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'countReset' ---
    // get current time
    t = countResetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    countResetComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function countResetRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'countReset' ---
    countResetComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('countReset.stopped', globalClock.getTime());
    // the Routine "countReset" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ITI_CombComponents;
function ITI_CombRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ITI_Comb' ---
    t = 0;
    ITI_CombClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.800000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('ITI_Comb.started', globalClock.getTime());
    // keep track of which components have finished
    ITI_CombComponents = [];
    ITI_CombComponents.push(image_65);
    ITI_CombComponents.push(image_66);
    
    ITI_CombComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ITI_CombRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ITI_Comb' ---
    // get current time
    t = ITI_CombClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_65* updates
    if (t >= 0.0 && image_65.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_65.tStart = t;  // (not accounting for frame time here)
      image_65.frameNStart = frameN;  // exact frame index
      
      image_65.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_65.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_65.setAutoDraw(false);
    }
    
    // *image_66* updates
    if (t >= 0.0 && image_66.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_66.tStart = t;  // (not accounting for frame time here)
      image_66.frameNStart = frameN;  // exact frame index
      
      image_66.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_66.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_66.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ITI_CombComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ITI_CombRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ITI_Comb' ---
    ITI_CombComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ITI_Comb.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FixationComb_2Components;
function FixationComb_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'FixationComb_2' ---
    t = 0;
    FixationComb_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('FixationComb_2.started', globalClock.getTime());
    // keep track of which components have finished
    FixationComb_2Components = [];
    FixationComb_2Components.push(image_67);
    FixationComb_2Components.push(image_68);
    FixationComb_2Components.push(image_69);
    
    FixationComb_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function FixationComb_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'FixationComb_2' ---
    // get current time
    t = FixationComb_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_67* updates
    if (t >= 0.0 && image_67.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_67.tStart = t;  // (not accounting for frame time here)
      image_67.frameNStart = frameN;  // exact frame index
      
      image_67.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + thisISI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_67.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_67.setAutoDraw(false);
    }
    
    // *image_68* updates
    if (t >= 0.0 && image_68.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_68.tStart = t;  // (not accounting for frame time here)
      image_68.frameNStart = frameN;  // exact frame index
      
      image_68.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + thisISI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_68.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_68.setAutoDraw(false);
    }
    
    // *image_69* updates
    if (t >= 0.0 && image_69.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_69.tStart = t;  // (not accounting for frame time here)
      image_69.frameNStart = frameN;  // exact frame index
      
      image_69.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + thisISI - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_69.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_69.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    FixationComb_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FixationComb_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'FixationComb_2' ---
    FixationComb_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('FixationComb_2.stopped', globalClock.getTime());
    // the Routine "FixationComb_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var cueComb_3Components;
function cueComb_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'cueComb_3' ---
    t = 0;
    cueComb_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('cueComb_3.started', globalClock.getTime());
    text_21.setText('颜色');
    // keep track of which components have finished
    cueComb_3Components = [];
    cueComb_3Components.push(image_75);
    cueComb_3Components.push(image_76);
    cueComb_3Components.push(text_21);
    
    cueComb_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function cueComb_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'cueComb_3' ---
    // get current time
    t = cueComb_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_75* updates
    if (t >= 0.0 && image_75.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_75.tStart = t;  // (not accounting for frame time here)
      image_75.frameNStart = frameN;  // exact frame index
      
      image_75.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_75.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_75.setAutoDraw(false);
    }
    
    // *image_76* updates
    if (t >= 0.0 && image_76.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_76.tStart = t;  // (not accounting for frame time here)
      image_76.frameNStart = frameN;  // exact frame index
      
      image_76.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_76.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_76.setAutoDraw(false);
    }
    
    // *text_21* updates
    if (t >= 0.0 && text_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_21.tStart = t;  // (not accounting for frame time here)
      text_21.frameNStart = frameN;  // exact frame index
      
      text_21.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_21.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_21.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    cueComb_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function cueComb_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'cueComb_3' ---
    cueComb_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('cueComb_3.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_13_allKeys;
var PracticeComb_2Components;
function PracticeComb_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PracticeComb_2' ---
    t = 0;
    PracticeComb_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('PracticeComb_2.started', globalClock.getTime());
    image_72.setImage(middleStim);
    key_resp_13.keys = undefined;
    key_resp_13.rt = undefined;
    _key_resp_13_allKeys = [];
    // keep track of which components have finished
    PracticeComb_2Components = [];
    PracticeComb_2Components.push(image_72);
    PracticeComb_2Components.push(image_73);
    PracticeComb_2Components.push(image_74);
    PracticeComb_2Components.push(key_resp_13);
    
    PracticeComb_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PracticeComb_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PracticeComb_2' ---
    // get current time
    t = PracticeComb_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_72* updates
    if (t >= 0.0 && image_72.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_72.tStart = t;  // (not accounting for frame time here)
      image_72.frameNStart = frameN;  // exact frame index
      
      image_72.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_72.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_72.setAutoDraw(false);
    }
    
    // *image_73* updates
    if (t >= 0.0 && image_73.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_73.tStart = t;  // (not accounting for frame time here)
      image_73.frameNStart = frameN;  // exact frame index
      
      image_73.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_73.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_73.setAutoDraw(false);
    }
    
    // *image_74* updates
    if (t >= 0.0 && image_74.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_74.tStart = t;  // (not accounting for frame time here)
      image_74.frameNStart = frameN;  // exact frame index
      
      image_74.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_74.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_74.setAutoDraw(false);
    }
    
    // *key_resp_13* updates
    if (t >= 0.0 && key_resp_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_13.tStart = t;  // (not accounting for frame time here)
      key_resp_13.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_13.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.clearEvents(); });
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_13.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_13.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_13.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _key_resp_13_allKeys = _key_resp_13_allKeys.concat(theseKeys);
      if (_key_resp_13_allKeys.length > 0) {
        key_resp_13.keys = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].name;  // just the last key pressed
        key_resp_13.rt = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].rt;
        key_resp_13.duration = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_13.keys == corrAns) {
            key_resp_13.corr = 1;
        } else {
            key_resp_13.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PracticeComb_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PracticeComb_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PracticeComb_2' ---
    PracticeComb_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('PracticeComb_2.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_13.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         key_resp_13.corr = 1;  // correct non-response
      } else {
         key_resp_13.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_13.corr, level);
    }
    psychoJS.experiment.addData('key_resp_13.keys', key_resp_13.keys);
    psychoJS.experiment.addData('key_resp_13.corr', key_resp_13.corr);
    if (typeof key_resp_13.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_13.rt', key_resp_13.rt);
        psychoJS.experiment.addData('key_resp_13.duration', key_resp_13.duration);
        routineTimer.reset();
        }
    
    key_resp_13.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stopColorLoopComponents;
function stopColorLoopRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stopColorLoop' ---
    t = 0;
    stopColorLoopClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('stopColorLoop.started', globalClock.getTime());
    // keep track of which components have finished
    stopColorLoopComponents = [];
    
    stopColorLoopComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function stopColorLoopRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stopColorLoop' ---
    // get current time
    t = stopColorLoopClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    stopColorLoopComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stopColorLoopRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stopColorLoop' ---
    stopColorLoopComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('stopColorLoop.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_10
    if ((colorLoopCounter === numFreq)) {
        colorLoop.finished = true;
        shapeLoopCounter = (3 - numFreq);
    }
    colorLoopCounter += 1;
    
    // the Routine "stopColorLoop" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var cueComb_2Components;
function cueComb_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'cueComb_2' ---
    t = 0;
    cueComb_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('cueComb_2.started', globalClock.getTime());
    text_20.setText('形状');
    // keep track of which components have finished
    cueComb_2Components = [];
    cueComb_2Components.push(image_70);
    cueComb_2Components.push(image_71);
    cueComb_2Components.push(text_20);
    
    cueComb_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function cueComb_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'cueComb_2' ---
    // get current time
    t = cueComb_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_70* updates
    if (t >= 0.0 && image_70.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_70.tStart = t;  // (not accounting for frame time here)
      image_70.frameNStart = frameN;  // exact frame index
      
      image_70.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_70.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_70.setAutoDraw(false);
    }
    
    // *image_71* updates
    if (t >= 0.0 && image_71.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_71.tStart = t;  // (not accounting for frame time here)
      image_71.frameNStart = frameN;  // exact frame index
      
      image_71.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_71.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_71.setAutoDraw(false);
    }
    
    // *text_20* updates
    if (t >= 0.0 && text_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_20.tStart = t;  // (not accounting for frame time here)
      text_20.frameNStart = frameN;  // exact frame index
      
      text_20.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_20.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_20.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    cueComb_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function cueComb_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'cueComb_2' ---
    cueComb_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('cueComb_2.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stopShapeLoopComponents;
function stopShapeLoopRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stopShapeLoop' ---
    t = 0;
    stopShapeLoopClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('stopShapeLoop.started', globalClock.getTime());
    // keep track of which components have finished
    stopShapeLoopComponents = [];
    
    stopShapeLoopComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function stopShapeLoopRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stopShapeLoop' ---
    // get current time
    t = stopShapeLoopClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    stopShapeLoopComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stopShapeLoopRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stopShapeLoop' ---
    stopShapeLoopComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('stopShapeLoop.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_13
    if ((shapeLoopCounter === 0)) {
        shapeLoop.finished = true;
    }
    shapeLoopCounter -= 1;
    
    // the Routine "stopShapeLoop" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ThankYouComponents;
function ThankYouRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ThankYou' ---
    t = 0;
    ThankYouClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('ThankYou.started', globalClock.getTime());
    // keep track of which components have finished
    ThankYouComponents = [];
    ThankYouComponents.push(text_19);
    
    ThankYouComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ThankYouRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ThankYou' ---
    // get current time
    t = ThankYouClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_19* updates
    if (t >= 0.0 && text_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_19.tStart = t;  // (not accounting for frame time here)
      text_19.frameNStart = frameN;  // exact frame index
      
      text_19.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_19.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_19.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ThankYouComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ThankYouRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ThankYou' ---
    ThankYouComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ThankYou.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
