#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on Thu Oct 27 23:22:16 2022
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'Flanker_Chinese'  # from the Builder filename that created this script
expInfo = {'姓名': '', '编号': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['姓名'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/zijing/Desktop/YanLab_toolbox_flanker_Chinese_online/Flanker_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1512, 982], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[-1,-1,-1], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "dummy_resources"
dummy_resourcesClock = core.Clock()
sound_14 = sound.Sound('audio/F-a.wav', secs=1.0, stereo=True, hamming=True,
    name='sound_14')
sound_14.setVolume(1)
sound_15 = sound.Sound('audio/F-b.wav', secs=1.0, stereo=True, hamming=True,
    name='sound_15')
sound_15.setVolume(1)
sound_16 = sound.Sound('audio/F-c.wav', secs=1.0, stereo=True, hamming=True,
    name='sound_16')
sound_16.setVolume(1)
sound_17 = sound.Sound('audio/F-d.wav', secs=1.0, stereo=True, hamming=True,
    name='sound_17')
sound_17.setVolume(1)
sound_18 = sound.Sound('audio/F-e.wav', secs=1.0, stereo=True, hamming=True,
    name='sound_18')
sound_18.setVolume(1)
image_47 = visual.ImageStim(
    win=win,
    name='image_47', 
    image='img/right_arrow_red.png', mask=None,
    ori=0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-5.0)
image_48 = visual.ImageStim(
    win=win,
    name='image_48', 
    image='img/left_arrow_red.png', mask=None,
    ori=0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-6.0)
sound_23 = sound.Sound('audio/F-g.wav', secs=1.0, stereo=True, hamming=True,
    name='sound_23')
sound_23.setVolume(1)

# Initialize components for Routine "JS_code"
JS_codeClock = core.Clock()

# Initialize components for Routine "instruction_1"
instruction_1Clock = core.Clock()
text_homebase = visual.TextStim(win=win, name='text_homebase',
    text='欢迎您参加本任务。\n\n在这个任务中，您将会看到一排指向不同方向的箭头，\n\n但首先，让我们先学习一下按键，请把您的左手食指\n\n放在Z键上，并把右手食指放在M键上。\n\n\n\n按空格键继续。',
    font='Heiti SC',
    pos=(0, 0), height=0.035, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
wecomle_resp = keyboard.Keyboard()
sound_1 = sound.Sound('audio/F1.wav', secs=-1, stereo=True, hamming=True,
    name='sound_1')
sound_1.setVolume(1)

# Initialize components for Routine "instruction_2"
instruction_2Clock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='您会看到一排箭头，\n\n您需要按下与“中间”箭头指向方向相同的按键。\n\n按空格键继续。',
    font='Heiti SC',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
image_8 = visual.ImageStim(
    win=win,
    name='image_8', 
    image='img/congruent_left.png', mask=None,
    ori=0, pos=(0, 0.38), size=(0.53, 0.53),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
image_9 = visual.ImageStim(
    win=win,
    name='image_9', 
    image='img/left_arrow.png', mask=None,
    ori=0, pos=(-0.4, -0.2), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
image_10 = visual.ImageStim(
    win=win,
    name='image_10', 
    image='img/right_arrow.png', mask=None,
    ori=0, pos=(0.4, -0.2), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
sound_2 = sound.Sound('audio/F3.wav', secs=-1, stereo=True, hamming=True,
    name='sound_2')
sound_2.setVolume(1)
key_resp_10 = keyboard.Keyboard()

# Initialize components for Routine "instruction_2_1"
instruction_2_1Clock = core.Clock()
image_11 = visual.ImageStim(
    win=win,
    name='image_11', 
    image='img/congruent_left_flash.png', mask=None,
    ori=0, pos=(0, 0.38), size=(0.53, 0.53),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
image_12 = visual.ImageStim(
    win=win,
    name='image_12', 
    image='img/left_arrow.png', mask=None,
    ori=0, pos=(-0.4, -0.2), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
image_13 = visual.ImageStim(
    win=win,
    name='image_13', 
    image='img/right_arrow.png', mask=None,
    ori=0, pos=(0.4, -0.2), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
text_5 = visual.TextStim(win=win, name='text_5',
    text='如果中间的箭头指向左方，请选择代表左的按键Z。\n\n\n按Z键继续。',
    font='Heiti SC',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
sound_3 = sound.Sound('audio/F6.wav', secs=-1, stereo=True, hamming=True,
    name='sound_3')
sound_3.setVolume(1)
image_24 = visual.ImageStim(
    win=win,
    name='image_24', 
    image='img/left_arrow_border.png', mask=None,
    ori=0, pos=(-0.4, -0.2), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-5.0)
key_resp_5 = keyboard.Keyboard()

# Initialize components for Routine "instruction_2_2"
instruction_2_2Clock = core.Clock()
image_14 = visual.ImageStim(
    win=win,
    name='image_14', 
    image='img/congruent_right_flash.png', mask=None,
    ori=0, pos=(0, 0.38), size=(0.53, 0.53),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
image_15 = visual.ImageStim(
    win=win,
    name='image_15', 
    image='img/left_arrow.png', mask=None,
    ori=0, pos=(-0.4, -0.2), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
image_16 = visual.ImageStim(
    win=win,
    name='image_16', 
    image='img/right_arrow.png', mask=None,
    ori=0, pos=(0.4, -0.2), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
text_6 = visual.TextStim(win=win, name='text_6',
    text='如果中间的箭头指向右方，请选择代表右的按键M。\n\n\n按M键继续。',
    font='heiti SC',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
sound_4 = sound.Sound('audio/F7.wav', secs=-1, stereo=True, hamming=True,
    name='sound_4')
sound_4.setVolume(1)
image_25 = visual.ImageStim(
    win=win,
    name='image_25', 
    image='img/right_arrow_border.png', mask=None,
    ori=0, pos=(0.4, -0.2), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-5.0)
key_resp_6 = keyboard.Keyboard()

# Initialize components for Routine "instruction_2_3"
instruction_2_3Clock = core.Clock()
image_17 = visual.ImageStim(
    win=win,
    name='image_17', 
    image='img/incongruent_right_flash.png', mask=None,
    ori=0, pos=(0, 0.38), size=(0.53, 0.53),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
image_18 = visual.ImageStim(
    win=win,
    name='image_18', 
    image='img/left_arrow.png', mask=None,
    ori=0, pos=(-0.4, -0.2), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
image_19 = visual.ImageStim(
    win=win,
    name='image_19', 
    image='img/right_arrow.png', mask=None,
    ori=0, pos=(0.4, -0.2), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
text_7 = visual.TextStim(win=win, name='text_7',
    text='有时候中间箭头的方向会和其他箭头不同，\n\n其他箭头向左，而中间箭头指右。\n\n\n请选择M键。',
    font='heiti sc',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
sound_5 = sound.Sound('audio/F8.wav', secs=-1, stereo=True, hamming=True,
    name='sound_5')
sound_5.setVolume(1)
image_23 = visual.ImageStim(
    win=win,
    name='image_23', 
    image='img/right_arrow_border.png', mask=None,
    ori=0, pos=(0.4, -0.2), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-5.0)
key_resp_7 = keyboard.Keyboard()

# Initialize components for Routine "instruction_2_4"
instruction_2_4Clock = core.Clock()
image_20 = visual.ImageStim(
    win=win,
    name='image_20', 
    image='img/incongruent_left_flash.png', mask=None,
    ori=0, pos=(0, 0.38), size=(0.53, 0.53),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
image_21 = visual.ImageStim(
    win=win,
    name='image_21', 
    image='img/left_arrow.png', mask=None,
    ori=0, pos=(-0.4, -0.2), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
image_22 = visual.ImageStim(
    win=win,
    name='image_22', 
    image='img/right_arrow.png', mask=None,
    ori=0, pos=(0.4, -0.2), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
text_8 = visual.TextStim(win=win, name='text_8',
    text='有时候中间的箭头的方向会和其他箭头不同，\n\n其他箭头向右，而中间箭头指左。\n\n\n请选择Z键。',
    font='heiti sc',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
sound_6 = sound.Sound('audio/F9.wav', secs=-1, stereo=True, hamming=True,
    name='sound_6')
sound_6.setVolume(1)
image_26 = visual.ImageStim(
    win=win,
    name='image_26', 
    image='img/left_arrow_border.png', mask=None,
    ori=0, pos=(-0.4, -0.2), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-5.0)
key_resp_8 = keyboard.Keyboard()

# Initialize components for Routine "instruction_2_5"
instruction_2_5Clock = core.Clock()
image_27 = visual.ImageStim(
    win=win,
    name='image_27', 
    image='img/incongruent_left_flash.png', mask=None,
    ori=0, pos=(0, 0.38), size=(0.53, 0.53),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
image_29 = visual.ImageStim(
    win=win,
    name='image_29', 
    image='img/right_arrow.png', mask=None,
    ori=0, pos=(0.4, -0.2), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
text_9 = visual.TextStim(win=win, name='text_9',
    text='请一直选择与中间箭头指向方向相同的按钮，\n\n您会看到“中间”这个词来提醒您。\n\n\n按空格键继续。',
    font='heiti sc',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
sound_7 = sound.Sound('audio/F10.wav', secs=-1, stereo=True, hamming=True,
    name='sound_7')
sound_7.setVolume(1)
image_30 = visual.ImageStim(
    win=win,
    name='image_30', 
    image='img/left_arrow_border.png', mask=None,
    ori=0, pos=(-0.4, -0.2), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-4.0)
key_resp_11 = keyboard.Keyboard()

# Initialize components for Routine "Instructions_3"
Instructions_3Clock = core.Clock()
image_49 = visual.ImageStim(
    win=win,
    name='image_49', 
    image='img/star_text.png', mask=None,
    ori=0, pos=(0, 0), size=(0.9, 0.6),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
key_resp_16 = keyboard.Keyboard()
sound_24 = sound.Sound('audio/F11.wav', secs=-1, stereo=True, hamming=True,
    name='sound_24')
sound_24.setVolume(1)

# Initialize components for Routine "inter_trial_interval"
inter_trial_intervalClock = core.Clock()
image_31 = visual.ImageStim(
    win=win,
    name='image_31', 
    image='img/left_arrow.png', mask=None,
    ori=0, pos=(-0.4, -0.2), size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
image_32 = visual.ImageStim(
    win=win,
    name='image_32', 
    image='img/right_arrow.png', mask=None,
    ori=0, pos=(0.4, -0.2), size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)

# Initialize components for Routine "ISIcode"
ISIcodeClock = core.Clock()

# Initialize components for Routine "fixation"
fixationClock = core.Clock()
image_35 = visual.ImageStim(
    win=win,
    name='image_35', 
    image='img/star_middle.png', mask=None,
    ori=0, pos=(0, .2), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
image_33 = visual.ImageStim(
    win=win,
    name='image_33', 
    image='img/left_arrow.png', mask=None,
    ori=0, pos=(-0.4, -0.2), size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
image_34 = visual.ImageStim(
    win=win,
    name='image_34', 
    image='img/right_arrow.png', mask=None,
    ori=0, pos=(0.4, -0.2), size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)

# Initialize components for Routine "Cue"
CueClock = core.Clock()
image_38 = visual.ImageStim(
    win=win,
    name='image_38', 
    image='img/middle.jpeg', mask=None,
    ori=0, pos=(0, .2), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
image_36 = visual.ImageStim(
    win=win,
    name='image_36', 
    image='img/left_arrow.png', mask=None,
    ori=0, pos=(-0.4, -0.2), size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
image_37 = visual.ImageStim(
    win=win,
    name='image_37', 
    image='img/right_arrow.png', mask=None,
    ori=0, pos=(0.4, -0.2), size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)

# Initialize components for Routine "Stim"
StimClock = core.Clock()
image_39 = visual.ImageStim(
    win=win,
    name='image_39', 
    image='sin', mask=None,
    ori=1.0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
image_41 = visual.ImageStim(
    win=win,
    name='image_41', 
    image='sin', mask=None,
    ori=1.0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
image = visual.ImageStim(
    win=win,
    name='image', 
    image='sin', mask=None,
    ori=1.0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
image_2 = visual.ImageStim(
    win=win,
    name='image_2', 
    image='sin', mask=None,
    ori=1.0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "Feedback"
FeedbackClock = core.Clock()
image_42 = visual.ImageStim(
    win=win,
    name='image_42', 
    image='sin', mask=None,
    ori=1.0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
image_3 = visual.ImageStim(
    win=win,
    name='image_3', 
    image='sin', mask=None,
    ori=1.0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
image_43 = visual.ImageStim(
    win=win,
    name='image_43', 
    image='sin', mask=None,
    ori=1.0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
sound_9 = sound.Sound('A', secs=-1, stereo=True, hamming=True,
    name='sound_9')
sound_9.setVolume(1.0)

# Initialize components for Routine "UpdateAccuracy"
UpdateAccuracyClock = core.Clock()
counterOne=0
counterTwo=0

# Initialize components for Routine "continueStatus"
continueStatusClock = core.Clock()
isForward = 0
text_24 = visual.TextStim(win=win, name='text_24',
    text='',
    font='heiti sc',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_18 = keyboard.Keyboard()
sound_10 = sound.Sound('A', secs=-1, stereo=True, hamming=True,
    name='sound_10')
sound_10.setVolume(1.0)

# Initialize components for Routine "Main_Exp_Instructions"
Main_Exp_InstructionsClock = core.Clock()
image_40 = visual.ImageStim(
    win=win,
    name='image_40', 
    image='img/star_text_formal.png', mask=None,
    ori=0, pos=(0, 0), size=(0.9, 0.6),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
key_resp_9 = keyboard.Keyboard()
sound_13 = sound.Sound('audio/F12.wav', secs=-1, stereo=True, hamming=True,
    name='sound_13')
sound_13.setVolume(1)

# Initialize components for Routine "inter_trial_interval"
inter_trial_intervalClock = core.Clock()
image_31 = visual.ImageStim(
    win=win,
    name='image_31', 
    image='img/left_arrow.png', mask=None,
    ori=0, pos=(-0.4, -0.2), size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
image_32 = visual.ImageStim(
    win=win,
    name='image_32', 
    image='img/right_arrow.png', mask=None,
    ori=0, pos=(0.4, -0.2), size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)

# Initialize components for Routine "ISIcode"
ISIcodeClock = core.Clock()

# Initialize components for Routine "fixation"
fixationClock = core.Clock()
image_35 = visual.ImageStim(
    win=win,
    name='image_35', 
    image='img/star_middle.png', mask=None,
    ori=0, pos=(0, .2), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
image_33 = visual.ImageStim(
    win=win,
    name='image_33', 
    image='img/left_arrow.png', mask=None,
    ori=0, pos=(-0.4, -0.2), size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
image_34 = visual.ImageStim(
    win=win,
    name='image_34', 
    image='img/right_arrow.png', mask=None,
    ori=0, pos=(0.4, -0.2), size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)

# Initialize components for Routine "Cue"
CueClock = core.Clock()
image_38 = visual.ImageStim(
    win=win,
    name='image_38', 
    image='img/middle.jpeg', mask=None,
    ori=0, pos=(0, .2), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
image_36 = visual.ImageStim(
    win=win,
    name='image_36', 
    image='img/left_arrow.png', mask=None,
    ori=0, pos=(-0.4, -0.2), size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
image_37 = visual.ImageStim(
    win=win,
    name='image_37', 
    image='img/right_arrow.png', mask=None,
    ori=0, pos=(0.4, -0.2), size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)

# Initialize components for Routine "Stim"
StimClock = core.Clock()
image_39 = visual.ImageStim(
    win=win,
    name='image_39', 
    image='sin', mask=None,
    ori=1.0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
image_41 = visual.ImageStim(
    win=win,
    name='image_41', 
    image='sin', mask=None,
    ori=1.0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
image = visual.ImageStim(
    win=win,
    name='image', 
    image='sin', mask=None,
    ori=1.0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
image_2 = visual.ImageStim(
    win=win,
    name='image_2', 
    image='sin', mask=None,
    ori=1.0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "finish"
finishClock = core.Clock()
text_3 = visual.TextStim(win=win, name='text_3',
    text='任务已经全部完成了，感谢您的参与！',
    font='heiti sc',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
sound_12 = sound.Sound('audio/F-f.wav', secs=-1, stereo=True, hamming=True,
    name='sound_12')
sound_12.setVolume(1.0)

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# set up handler to look after randomisation of conditions etc
dummy_trial = data.TrialHandler(nReps=0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='dummy_trial')
thisExp.addLoop(dummy_trial)  # add the loop to the experiment
thisDummy_trial = dummy_trial.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisDummy_trial.rgb)
if thisDummy_trial != None:
    for paramName in thisDummy_trial:
        exec('{} = thisDummy_trial[paramName]'.format(paramName))

for thisDummy_trial in dummy_trial:
    currentLoop = dummy_trial
    # abbreviate parameter names if possible (e.g. rgb = thisDummy_trial.rgb)
    if thisDummy_trial != None:
        for paramName in thisDummy_trial:
            exec('{} = thisDummy_trial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "dummy_resources"-------
    continueRoutine = True
    routineTimer.add(1.000000)
    # update component parameters for each repeat
    sound_14.setSound('audio/F-a.wav', secs=1.0, hamming=True)
    sound_14.setVolume(1, log=False)
    sound_15.setSound('audio/F-b.wav', secs=1.0, hamming=True)
    sound_15.setVolume(1, log=False)
    sound_16.setSound('audio/F-c.wav', secs=1.0, hamming=True)
    sound_16.setVolume(1, log=False)
    sound_17.setSound('audio/F-d.wav', secs=1.0, hamming=True)
    sound_17.setVolume(1, log=False)
    sound_18.setSound('audio/F-e.wav', secs=1.0, hamming=True)
    sound_18.setVolume(1, log=False)
    sound_23.setSound('audio/F-g.wav', secs=1.0, hamming=True)
    sound_23.setVolume(1, log=False)
    # keep track of which components have finished
    dummy_resourcesComponents = [sound_14, sound_15, sound_16, sound_17, sound_18, image_47, image_48, sound_23]
    for thisComponent in dummy_resourcesComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    dummy_resourcesClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "dummy_resources"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = dummy_resourcesClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=dummy_resourcesClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # start/stop sound_14
        if sound_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_14.frameNStart = frameN  # exact frame index
            sound_14.tStart = t  # local t and not account for scr refresh
            sound_14.tStartRefresh = tThisFlipGlobal  # on global time
            sound_14.play(when=win)  # sync with win flip
        if sound_14.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_14.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                sound_14.tStop = t  # not accounting for scr refresh
                sound_14.frameNStop = frameN  # exact frame index
                win.timeOnFlip(sound_14, 'tStopRefresh')  # time at next scr refresh
                sound_14.stop()
        # start/stop sound_15
        if sound_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_15.frameNStart = frameN  # exact frame index
            sound_15.tStart = t  # local t and not account for scr refresh
            sound_15.tStartRefresh = tThisFlipGlobal  # on global time
            sound_15.play(when=win)  # sync with win flip
        if sound_15.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_15.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                sound_15.tStop = t  # not accounting for scr refresh
                sound_15.frameNStop = frameN  # exact frame index
                win.timeOnFlip(sound_15, 'tStopRefresh')  # time at next scr refresh
                sound_15.stop()
        # start/stop sound_16
        if sound_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_16.frameNStart = frameN  # exact frame index
            sound_16.tStart = t  # local t and not account for scr refresh
            sound_16.tStartRefresh = tThisFlipGlobal  # on global time
            sound_16.play(when=win)  # sync with win flip
        if sound_16.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_16.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                sound_16.tStop = t  # not accounting for scr refresh
                sound_16.frameNStop = frameN  # exact frame index
                win.timeOnFlip(sound_16, 'tStopRefresh')  # time at next scr refresh
                sound_16.stop()
        # start/stop sound_17
        if sound_17.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_17.frameNStart = frameN  # exact frame index
            sound_17.tStart = t  # local t and not account for scr refresh
            sound_17.tStartRefresh = tThisFlipGlobal  # on global time
            sound_17.play(when=win)  # sync with win flip
        if sound_17.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_17.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                sound_17.tStop = t  # not accounting for scr refresh
                sound_17.frameNStop = frameN  # exact frame index
                win.timeOnFlip(sound_17, 'tStopRefresh')  # time at next scr refresh
                sound_17.stop()
        # start/stop sound_18
        if sound_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_18.frameNStart = frameN  # exact frame index
            sound_18.tStart = t  # local t and not account for scr refresh
            sound_18.tStartRefresh = tThisFlipGlobal  # on global time
            sound_18.play(when=win)  # sync with win flip
        if sound_18.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_18.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                sound_18.tStop = t  # not accounting for scr refresh
                sound_18.frameNStop = frameN  # exact frame index
                win.timeOnFlip(sound_18, 'tStopRefresh')  # time at next scr refresh
                sound_18.stop()
        
        # *image_47* updates
        if image_47.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_47.frameNStart = frameN  # exact frame index
            image_47.tStart = t  # local t and not account for scr refresh
            image_47.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_47, 'tStartRefresh')  # time at next scr refresh
            image_47.setAutoDraw(True)
        if image_47.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_47.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                image_47.tStop = t  # not accounting for scr refresh
                image_47.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_47, 'tStopRefresh')  # time at next scr refresh
                image_47.setAutoDraw(False)
        
        # *image_48* updates
        if image_48.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_48.frameNStart = frameN  # exact frame index
            image_48.tStart = t  # local t and not account for scr refresh
            image_48.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_48, 'tStartRefresh')  # time at next scr refresh
            image_48.setAutoDraw(True)
        if image_48.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_48.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                image_48.tStop = t  # not accounting for scr refresh
                image_48.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_48, 'tStopRefresh')  # time at next scr refresh
                image_48.setAutoDraw(False)
        # start/stop sound_23
        if sound_23.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_23.frameNStart = frameN  # exact frame index
            sound_23.tStart = t  # local t and not account for scr refresh
            sound_23.tStartRefresh = tThisFlipGlobal  # on global time
            sound_23.play(when=win)  # sync with win flip
        if sound_23.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_23.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                sound_23.tStop = t  # not accounting for scr refresh
                sound_23.frameNStop = frameN  # exact frame index
                win.timeOnFlip(sound_23, 'tStopRefresh')  # time at next scr refresh
                sound_23.stop()
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in dummy_resourcesComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "dummy_resources"-------
    for thisComponent in dummy_resourcesComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    sound_14.stop()  # ensure sound has stopped at end of routine
    dummy_trial.addData('sound_14.started', sound_14.tStartRefresh)
    dummy_trial.addData('sound_14.stopped', sound_14.tStopRefresh)
    sound_15.stop()  # ensure sound has stopped at end of routine
    dummy_trial.addData('sound_15.started', sound_15.tStartRefresh)
    dummy_trial.addData('sound_15.stopped', sound_15.tStopRefresh)
    sound_16.stop()  # ensure sound has stopped at end of routine
    dummy_trial.addData('sound_16.started', sound_16.tStartRefresh)
    dummy_trial.addData('sound_16.stopped', sound_16.tStopRefresh)
    sound_17.stop()  # ensure sound has stopped at end of routine
    dummy_trial.addData('sound_17.started', sound_17.tStartRefresh)
    dummy_trial.addData('sound_17.stopped', sound_17.tStopRefresh)
    sound_18.stop()  # ensure sound has stopped at end of routine
    dummy_trial.addData('sound_18.started', sound_18.tStartRefresh)
    dummy_trial.addData('sound_18.stopped', sound_18.tStopRefresh)
    dummy_trial.addData('image_47.started', image_47.tStartRefresh)
    dummy_trial.addData('image_47.stopped', image_47.tStopRefresh)
    dummy_trial.addData('image_48.started', image_48.tStartRefresh)
    dummy_trial.addData('image_48.stopped', image_48.tStopRefresh)
    sound_23.stop()  # ensure sound has stopped at end of routine
    dummy_trial.addData('sound_23.started', sound_23.tStartRefresh)
    dummy_trial.addData('sound_23.stopped', sound_23.tStopRefresh)
    thisExp.nextEntry()
    
# completed 0 repeats of 'dummy_trial'


# ------Prepare to start Routine "JS_code"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
JS_codeComponents = []
for thisComponent in JS_codeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
JS_codeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "JS_code"-------
while continueRoutine:
    # get current time
    t = JS_codeClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=JS_codeClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in JS_codeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "JS_code"-------
for thisComponent in JS_codeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "JS_code" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instruction_1"-------
continueRoutine = True
# update component parameters for each repeat
wecomle_resp.keys = []
wecomle_resp.rt = []
_wecomle_resp_allKeys = []
sound_1.setSound('audio/F1.wav', secs=30, hamming=True)
sound_1.setVolume(1, log=False)
# keep track of which components have finished
instruction_1Components = [text_homebase, wecomle_resp, sound_1]
for thisComponent in instruction_1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instruction_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instruction_1"-------
while continueRoutine:
    # get current time
    t = instruction_1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instruction_1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_homebase* updates
    if text_homebase.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_homebase.frameNStart = frameN  # exact frame index
        text_homebase.tStart = t  # local t and not account for scr refresh
        text_homebase.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_homebase, 'tStartRefresh')  # time at next scr refresh
        text_homebase.setAutoDraw(True)
    
    # *wecomle_resp* updates
    waitOnFlip = False
    if wecomle_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        wecomle_resp.frameNStart = frameN  # exact frame index
        wecomle_resp.tStart = t  # local t and not account for scr refresh
        wecomle_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(wecomle_resp, 'tStartRefresh')  # time at next scr refresh
        wecomle_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(wecomle_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(wecomle_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if wecomle_resp.status == STARTED and not waitOnFlip:
        theseKeys = wecomle_resp.getKeys(keyList=['space'], waitRelease=False)
        _wecomle_resp_allKeys.extend(theseKeys)
        if len(_wecomle_resp_allKeys):
            wecomle_resp.keys = _wecomle_resp_allKeys[-1].name  # just the last key pressed
            wecomle_resp.rt = _wecomle_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    # start/stop sound_1
    if sound_1.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sound_1.frameNStart = frameN  # exact frame index
        sound_1.tStart = t  # local t and not account for scr refresh
        sound_1.tStartRefresh = tThisFlipGlobal  # on global time
        sound_1.play()  # start the sound (it finishes automatically)
    if sound_1.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > sound_1.tStartRefresh + 30-frameTolerance:
            # keep track of stop time/frame for later
            sound_1.tStop = t  # not accounting for scr refresh
            sound_1.frameNStop = frameN  # exact frame index
            win.timeOnFlip(sound_1, 'tStopRefresh')  # time at next scr refresh
            sound_1.stop()
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instruction_1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instruction_1"-------
for thisComponent in instruction_1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
sound_1.stop()  # ensure sound has stopped at end of routine
# the Routine "instruction_1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instruction_2"-------
continueRoutine = True
# update component parameters for each repeat
sound_2.setSound('audio/F3.wav', secs=30, hamming=True)
sound_2.setVolume(1, log=False)
key_resp_10.keys = []
key_resp_10.rt = []
_key_resp_10_allKeys = []
# keep track of which components have finished
instruction_2Components = [text, image_8, image_9, image_10, sound_2, key_resp_10]
for thisComponent in instruction_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instruction_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instruction_2"-------
while continueRoutine:
    # get current time
    t = instruction_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instruction_2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    
    # *image_8* updates
    if image_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_8.frameNStart = frameN  # exact frame index
        image_8.tStart = t  # local t and not account for scr refresh
        image_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_8, 'tStartRefresh')  # time at next scr refresh
        image_8.setAutoDraw(True)
    
    # *image_9* updates
    if image_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_9.frameNStart = frameN  # exact frame index
        image_9.tStart = t  # local t and not account for scr refresh
        image_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_9, 'tStartRefresh')  # time at next scr refresh
        image_9.setAutoDraw(True)
    
    # *image_10* updates
    if image_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_10.frameNStart = frameN  # exact frame index
        image_10.tStart = t  # local t and not account for scr refresh
        image_10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_10, 'tStartRefresh')  # time at next scr refresh
        image_10.setAutoDraw(True)
    # start/stop sound_2
    if sound_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sound_2.frameNStart = frameN  # exact frame index
        sound_2.tStart = t  # local t and not account for scr refresh
        sound_2.tStartRefresh = tThisFlipGlobal  # on global time
        sound_2.play(when=win)  # sync with win flip
    if sound_2.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > sound_2.tStartRefresh + 30-frameTolerance:
            # keep track of stop time/frame for later
            sound_2.tStop = t  # not accounting for scr refresh
            sound_2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(sound_2, 'tStopRefresh')  # time at next scr refresh
            sound_2.stop()
    
    # *key_resp_10* updates
    waitOnFlip = False
    if key_resp_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_10.frameNStart = frameN  # exact frame index
        key_resp_10.tStart = t  # local t and not account for scr refresh
        key_resp_10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_10, 'tStartRefresh')  # time at next scr refresh
        key_resp_10.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_10.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_10.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_10.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_10.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_10_allKeys.extend(theseKeys)
        if len(_key_resp_10_allKeys):
            key_resp_10.keys = _key_resp_10_allKeys[-1].name  # just the last key pressed
            key_resp_10.rt = _key_resp_10_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instruction_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instruction_2"-------
for thisComponent in instruction_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)
thisExp.addData('image_8.started', image_8.tStartRefresh)
thisExp.addData('image_8.stopped', image_8.tStopRefresh)
thisExp.addData('image_9.started', image_9.tStartRefresh)
thisExp.addData('image_9.stopped', image_9.tStopRefresh)
thisExp.addData('image_10.started', image_10.tStartRefresh)
thisExp.addData('image_10.stopped', image_10.tStopRefresh)
sound_2.stop()  # ensure sound has stopped at end of routine
thisExp.addData('sound_2.started', sound_2.tStartRefresh)
thisExp.addData('sound_2.stopped', sound_2.tStopRefresh)
# check responses
if key_resp_10.keys in ['', [], None]:  # No response was made
    key_resp_10.keys = None
thisExp.addData('key_resp_10.keys',key_resp_10.keys)
if key_resp_10.keys != None:  # we had a response
    thisExp.addData('key_resp_10.rt', key_resp_10.rt)
thisExp.addData('key_resp_10.started', key_resp_10.tStartRefresh)
thisExp.addData('key_resp_10.stopped', key_resp_10.tStopRefresh)
thisExp.nextEntry()
# the Routine "instruction_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instruction_2_1"-------
continueRoutine = True
# update component parameters for each repeat
sound_3.setSound('audio/F6.wav', secs=20, hamming=True)
sound_3.setVolume(1, log=False)
key_resp_5.keys = []
key_resp_5.rt = []
_key_resp_5_allKeys = []
# keep track of which components have finished
instruction_2_1Components = [image_11, image_12, image_13, text_5, sound_3, image_24, key_resp_5]
for thisComponent in instruction_2_1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instruction_2_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instruction_2_1"-------
while continueRoutine:
    # get current time
    t = instruction_2_1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instruction_2_1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_11* updates
    if image_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_11.frameNStart = frameN  # exact frame index
        image_11.tStart = t  # local t and not account for scr refresh
        image_11.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_11, 'tStartRefresh')  # time at next scr refresh
        image_11.setAutoDraw(True)
    
    # *image_12* updates
    if image_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_12.frameNStart = frameN  # exact frame index
        image_12.tStart = t  # local t and not account for scr refresh
        image_12.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_12, 'tStartRefresh')  # time at next scr refresh
        image_12.setAutoDraw(True)
    if image_12.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > image_12.tStartRefresh + 2-frameTolerance:
            # keep track of stop time/frame for later
            image_12.tStop = t  # not accounting for scr refresh
            image_12.frameNStop = frameN  # exact frame index
            win.timeOnFlip(image_12, 'tStopRefresh')  # time at next scr refresh
            image_12.setAutoDraw(False)
    
    # *image_13* updates
    if image_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_13.frameNStart = frameN  # exact frame index
        image_13.tStart = t  # local t and not account for scr refresh
        image_13.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_13, 'tStartRefresh')  # time at next scr refresh
        image_13.setAutoDraw(True)
    
    # *text_5* updates
    if text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_5.frameNStart = frameN  # exact frame index
        text_5.tStart = t  # local t and not account for scr refresh
        text_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
        text_5.setAutoDraw(True)
    # start/stop sound_3
    if sound_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sound_3.frameNStart = frameN  # exact frame index
        sound_3.tStart = t  # local t and not account for scr refresh
        sound_3.tStartRefresh = tThisFlipGlobal  # on global time
        sound_3.play(when=win)  # sync with win flip
    if sound_3.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > sound_3.tStartRefresh + 20-frameTolerance:
            # keep track of stop time/frame for later
            sound_3.tStop = t  # not accounting for scr refresh
            sound_3.frameNStop = frameN  # exact frame index
            win.timeOnFlip(sound_3, 'tStopRefresh')  # time at next scr refresh
            sound_3.stop()
    
    # *image_24* updates
    if image_24.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
        # keep track of start time/frame for later
        image_24.frameNStart = frameN  # exact frame index
        image_24.tStart = t  # local t and not account for scr refresh
        image_24.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_24, 'tStartRefresh')  # time at next scr refresh
        image_24.setAutoDraw(True)
    if image_24.status == STARTED:  # only update if drawing
        image_24.setOpacity(sin(t*10), log=False)
    
    # *key_resp_5* updates
    waitOnFlip = False
    if key_resp_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_5.frameNStart = frameN  # exact frame index
        key_resp_5.tStart = t  # local t and not account for scr refresh
        key_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_5, 'tStartRefresh')  # time at next scr refresh
        key_resp_5.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_5.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_5.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_5.getKeys(keyList=['z'], waitRelease=False)
        _key_resp_5_allKeys.extend(theseKeys)
        if len(_key_resp_5_allKeys):
            key_resp_5.keys = _key_resp_5_allKeys[-1].name  # just the last key pressed
            key_resp_5.rt = _key_resp_5_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instruction_2_1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instruction_2_1"-------
for thisComponent in instruction_2_1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('image_11.started', image_11.tStartRefresh)
thisExp.addData('image_11.stopped', image_11.tStopRefresh)
thisExp.addData('image_12.started', image_12.tStartRefresh)
thisExp.addData('image_12.stopped', image_12.tStopRefresh)
thisExp.addData('image_13.started', image_13.tStartRefresh)
thisExp.addData('image_13.stopped', image_13.tStopRefresh)
thisExp.addData('text_5.started', text_5.tStartRefresh)
thisExp.addData('text_5.stopped', text_5.tStopRefresh)
sound_3.stop()  # ensure sound has stopped at end of routine
thisExp.addData('sound_3.started', sound_3.tStartRefresh)
thisExp.addData('sound_3.stopped', sound_3.tStopRefresh)
thisExp.addData('image_24.started', image_24.tStartRefresh)
thisExp.addData('image_24.stopped', image_24.tStopRefresh)
# check responses
if key_resp_5.keys in ['', [], None]:  # No response was made
    key_resp_5.keys = None
thisExp.addData('key_resp_5.keys',key_resp_5.keys)
if key_resp_5.keys != None:  # we had a response
    thisExp.addData('key_resp_5.rt', key_resp_5.rt)
thisExp.addData('key_resp_5.started', key_resp_5.tStartRefresh)
thisExp.addData('key_resp_5.stopped', key_resp_5.tStopRefresh)
thisExp.nextEntry()
# the Routine "instruction_2_1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instruction_2_2"-------
continueRoutine = True
# update component parameters for each repeat
sound_4.setSound('audio/F7.wav', secs=20, hamming=True)
sound_4.setVolume(1, log=False)
key_resp_6.keys = []
key_resp_6.rt = []
_key_resp_6_allKeys = []
# keep track of which components have finished
instruction_2_2Components = [image_14, image_15, image_16, text_6, sound_4, image_25, key_resp_6]
for thisComponent in instruction_2_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instruction_2_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instruction_2_2"-------
while continueRoutine:
    # get current time
    t = instruction_2_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instruction_2_2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_14* updates
    if image_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_14.frameNStart = frameN  # exact frame index
        image_14.tStart = t  # local t and not account for scr refresh
        image_14.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_14, 'tStartRefresh')  # time at next scr refresh
        image_14.setAutoDraw(True)
    
    # *image_15* updates
    if image_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_15.frameNStart = frameN  # exact frame index
        image_15.tStart = t  # local t and not account for scr refresh
        image_15.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_15, 'tStartRefresh')  # time at next scr refresh
        image_15.setAutoDraw(True)
    
    # *image_16* updates
    if image_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_16.frameNStart = frameN  # exact frame index
        image_16.tStart = t  # local t and not account for scr refresh
        image_16.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_16, 'tStartRefresh')  # time at next scr refresh
        image_16.setAutoDraw(True)
    if image_16.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > image_16.tStartRefresh + 2-frameTolerance:
            # keep track of stop time/frame for later
            image_16.tStop = t  # not accounting for scr refresh
            image_16.frameNStop = frameN  # exact frame index
            win.timeOnFlip(image_16, 'tStopRefresh')  # time at next scr refresh
            image_16.setAutoDraw(False)
    
    # *text_6* updates
    if text_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_6.frameNStart = frameN  # exact frame index
        text_6.tStart = t  # local t and not account for scr refresh
        text_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
        text_6.setAutoDraw(True)
    # start/stop sound_4
    if sound_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sound_4.frameNStart = frameN  # exact frame index
        sound_4.tStart = t  # local t and not account for scr refresh
        sound_4.tStartRefresh = tThisFlipGlobal  # on global time
        sound_4.play(when=win)  # sync with win flip
    if sound_4.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > sound_4.tStartRefresh + 20-frameTolerance:
            # keep track of stop time/frame for later
            sound_4.tStop = t  # not accounting for scr refresh
            sound_4.frameNStop = frameN  # exact frame index
            win.timeOnFlip(sound_4, 'tStopRefresh')  # time at next scr refresh
            sound_4.stop()
    
    # *image_25* updates
    if image_25.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
        # keep track of start time/frame for later
        image_25.frameNStart = frameN  # exact frame index
        image_25.tStart = t  # local t and not account for scr refresh
        image_25.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_25, 'tStartRefresh')  # time at next scr refresh
        image_25.setAutoDraw(True)
    if image_25.status == STARTED:  # only update if drawing
        image_25.setOpacity(sin(t*10), log=False)
    
    # *key_resp_6* updates
    waitOnFlip = False
    if key_resp_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_6.frameNStart = frameN  # exact frame index
        key_resp_6.tStart = t  # local t and not account for scr refresh
        key_resp_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_6, 'tStartRefresh')  # time at next scr refresh
        key_resp_6.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_6.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_6.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_6.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_6.getKeys(keyList=['m'], waitRelease=False)
        _key_resp_6_allKeys.extend(theseKeys)
        if len(_key_resp_6_allKeys):
            key_resp_6.keys = _key_resp_6_allKeys[-1].name  # just the last key pressed
            key_resp_6.rt = _key_resp_6_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instruction_2_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instruction_2_2"-------
for thisComponent in instruction_2_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('image_14.started', image_14.tStartRefresh)
thisExp.addData('image_14.stopped', image_14.tStopRefresh)
thisExp.addData('image_15.started', image_15.tStartRefresh)
thisExp.addData('image_15.stopped', image_15.tStopRefresh)
thisExp.addData('image_16.started', image_16.tStartRefresh)
thisExp.addData('image_16.stopped', image_16.tStopRefresh)
thisExp.addData('text_6.started', text_6.tStartRefresh)
thisExp.addData('text_6.stopped', text_6.tStopRefresh)
sound_4.stop()  # ensure sound has stopped at end of routine
thisExp.addData('sound_4.started', sound_4.tStartRefresh)
thisExp.addData('sound_4.stopped', sound_4.tStopRefresh)
thisExp.addData('image_25.started', image_25.tStartRefresh)
thisExp.addData('image_25.stopped', image_25.tStopRefresh)
# check responses
if key_resp_6.keys in ['', [], None]:  # No response was made
    key_resp_6.keys = None
thisExp.addData('key_resp_6.keys',key_resp_6.keys)
if key_resp_6.keys != None:  # we had a response
    thisExp.addData('key_resp_6.rt', key_resp_6.rt)
thisExp.addData('key_resp_6.started', key_resp_6.tStartRefresh)
thisExp.addData('key_resp_6.stopped', key_resp_6.tStopRefresh)
thisExp.nextEntry()
# the Routine "instruction_2_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instruction_2_3"-------
continueRoutine = True
# update component parameters for each repeat
sound_5.setSound('audio/F8.wav', secs=30, hamming=True)
sound_5.setVolume(1, log=False)
key_resp_7.keys = []
key_resp_7.rt = []
_key_resp_7_allKeys = []
# keep track of which components have finished
instruction_2_3Components = [image_17, image_18, image_19, text_7, sound_5, image_23, key_resp_7]
for thisComponent in instruction_2_3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instruction_2_3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instruction_2_3"-------
while continueRoutine:
    # get current time
    t = instruction_2_3Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instruction_2_3Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_17* updates
    if image_17.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_17.frameNStart = frameN  # exact frame index
        image_17.tStart = t  # local t and not account for scr refresh
        image_17.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_17, 'tStartRefresh')  # time at next scr refresh
        image_17.setAutoDraw(True)
    
    # *image_18* updates
    if image_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_18.frameNStart = frameN  # exact frame index
        image_18.tStart = t  # local t and not account for scr refresh
        image_18.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_18, 'tStartRefresh')  # time at next scr refresh
        image_18.setAutoDraw(True)
    
    # *image_19* updates
    if image_19.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_19.frameNStart = frameN  # exact frame index
        image_19.tStart = t  # local t and not account for scr refresh
        image_19.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_19, 'tStartRefresh')  # time at next scr refresh
        image_19.setAutoDraw(True)
    if image_19.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > image_19.tStartRefresh + 5-frameTolerance:
            # keep track of stop time/frame for later
            image_19.tStop = t  # not accounting for scr refresh
            image_19.frameNStop = frameN  # exact frame index
            win.timeOnFlip(image_19, 'tStopRefresh')  # time at next scr refresh
            image_19.setAutoDraw(False)
    
    # *text_7* updates
    if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_7.frameNStart = frameN  # exact frame index
        text_7.tStart = t  # local t and not account for scr refresh
        text_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
        text_7.setAutoDraw(True)
    # start/stop sound_5
    if sound_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sound_5.frameNStart = frameN  # exact frame index
        sound_5.tStart = t  # local t and not account for scr refresh
        sound_5.tStartRefresh = tThisFlipGlobal  # on global time
        sound_5.play(when=win)  # sync with win flip
    if sound_5.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > sound_5.tStartRefresh + 30-frameTolerance:
            # keep track of stop time/frame for later
            sound_5.tStop = t  # not accounting for scr refresh
            sound_5.frameNStop = frameN  # exact frame index
            win.timeOnFlip(sound_5, 'tStopRefresh')  # time at next scr refresh
            sound_5.stop()
    
    # *image_23* updates
    if image_23.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
        # keep track of start time/frame for later
        image_23.frameNStart = frameN  # exact frame index
        image_23.tStart = t  # local t and not account for scr refresh
        image_23.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_23, 'tStartRefresh')  # time at next scr refresh
        image_23.setAutoDraw(True)
    if image_23.status == STARTED:  # only update if drawing
        image_23.setOpacity(sin(t*10), log=False)
    
    # *key_resp_7* updates
    waitOnFlip = False
    if key_resp_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_7.frameNStart = frameN  # exact frame index
        key_resp_7.tStart = t  # local t and not account for scr refresh
        key_resp_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_7, 'tStartRefresh')  # time at next scr refresh
        key_resp_7.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_7.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_7.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_7.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_7.getKeys(keyList=['m'], waitRelease=False)
        _key_resp_7_allKeys.extend(theseKeys)
        if len(_key_resp_7_allKeys):
            key_resp_7.keys = _key_resp_7_allKeys[-1].name  # just the last key pressed
            key_resp_7.rt = _key_resp_7_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instruction_2_3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instruction_2_3"-------
for thisComponent in instruction_2_3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('image_17.started', image_17.tStartRefresh)
thisExp.addData('image_17.stopped', image_17.tStopRefresh)
thisExp.addData('image_18.started', image_18.tStartRefresh)
thisExp.addData('image_18.stopped', image_18.tStopRefresh)
thisExp.addData('image_19.started', image_19.tStartRefresh)
thisExp.addData('image_19.stopped', image_19.tStopRefresh)
thisExp.addData('text_7.started', text_7.tStartRefresh)
thisExp.addData('text_7.stopped', text_7.tStopRefresh)
sound_5.stop()  # ensure sound has stopped at end of routine
thisExp.addData('sound_5.started', sound_5.tStartRefresh)
thisExp.addData('sound_5.stopped', sound_5.tStopRefresh)
thisExp.addData('image_23.started', image_23.tStartRefresh)
thisExp.addData('image_23.stopped', image_23.tStopRefresh)
# check responses
if key_resp_7.keys in ['', [], None]:  # No response was made
    key_resp_7.keys = None
thisExp.addData('key_resp_7.keys',key_resp_7.keys)
if key_resp_7.keys != None:  # we had a response
    thisExp.addData('key_resp_7.rt', key_resp_7.rt)
thisExp.addData('key_resp_7.started', key_resp_7.tStartRefresh)
thisExp.addData('key_resp_7.stopped', key_resp_7.tStopRefresh)
thisExp.nextEntry()
# the Routine "instruction_2_3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instruction_2_4"-------
continueRoutine = True
# update component parameters for each repeat
sound_6.setSound('audio/F9.wav', secs=30, hamming=True)
sound_6.setVolume(1, log=False)
key_resp_8.keys = []
key_resp_8.rt = []
_key_resp_8_allKeys = []
# keep track of which components have finished
instruction_2_4Components = [image_20, image_21, image_22, text_8, sound_6, image_26, key_resp_8]
for thisComponent in instruction_2_4Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instruction_2_4Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instruction_2_4"-------
while continueRoutine:
    # get current time
    t = instruction_2_4Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instruction_2_4Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_20* updates
    if image_20.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_20.frameNStart = frameN  # exact frame index
        image_20.tStart = t  # local t and not account for scr refresh
        image_20.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_20, 'tStartRefresh')  # time at next scr refresh
        image_20.setAutoDraw(True)
    
    # *image_21* updates
    if image_21.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_21.frameNStart = frameN  # exact frame index
        image_21.tStart = t  # local t and not account for scr refresh
        image_21.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_21, 'tStartRefresh')  # time at next scr refresh
        image_21.setAutoDraw(True)
    if image_21.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > image_21.tStartRefresh + 5-frameTolerance:
            # keep track of stop time/frame for later
            image_21.tStop = t  # not accounting for scr refresh
            image_21.frameNStop = frameN  # exact frame index
            win.timeOnFlip(image_21, 'tStopRefresh')  # time at next scr refresh
            image_21.setAutoDraw(False)
    
    # *image_22* updates
    if image_22.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_22.frameNStart = frameN  # exact frame index
        image_22.tStart = t  # local t and not account for scr refresh
        image_22.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_22, 'tStartRefresh')  # time at next scr refresh
        image_22.setAutoDraw(True)
    
    # *text_8* updates
    if text_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_8.frameNStart = frameN  # exact frame index
        text_8.tStart = t  # local t and not account for scr refresh
        text_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_8, 'tStartRefresh')  # time at next scr refresh
        text_8.setAutoDraw(True)
    # start/stop sound_6
    if sound_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sound_6.frameNStart = frameN  # exact frame index
        sound_6.tStart = t  # local t and not account for scr refresh
        sound_6.tStartRefresh = tThisFlipGlobal  # on global time
        sound_6.play(when=win)  # sync with win flip
    if sound_6.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > sound_6.tStartRefresh + 30-frameTolerance:
            # keep track of stop time/frame for later
            sound_6.tStop = t  # not accounting for scr refresh
            sound_6.frameNStop = frameN  # exact frame index
            win.timeOnFlip(sound_6, 'tStopRefresh')  # time at next scr refresh
            sound_6.stop()
    
    # *image_26* updates
    if image_26.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
        # keep track of start time/frame for later
        image_26.frameNStart = frameN  # exact frame index
        image_26.tStart = t  # local t and not account for scr refresh
        image_26.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_26, 'tStartRefresh')  # time at next scr refresh
        image_26.setAutoDraw(True)
    if image_26.status == STARTED:  # only update if drawing
        image_26.setOpacity(sin(t*10), log=False)
    
    # *key_resp_8* updates
    waitOnFlip = False
    if key_resp_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_8.frameNStart = frameN  # exact frame index
        key_resp_8.tStart = t  # local t and not account for scr refresh
        key_resp_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_8, 'tStartRefresh')  # time at next scr refresh
        key_resp_8.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_8.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_8.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_8.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_8.getKeys(keyList=['z'], waitRelease=False)
        _key_resp_8_allKeys.extend(theseKeys)
        if len(_key_resp_8_allKeys):
            key_resp_8.keys = _key_resp_8_allKeys[-1].name  # just the last key pressed
            key_resp_8.rt = _key_resp_8_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instruction_2_4Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instruction_2_4"-------
for thisComponent in instruction_2_4Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('image_20.started', image_20.tStartRefresh)
thisExp.addData('image_20.stopped', image_20.tStopRefresh)
thisExp.addData('image_21.started', image_21.tStartRefresh)
thisExp.addData('image_21.stopped', image_21.tStopRefresh)
thisExp.addData('image_22.started', image_22.tStartRefresh)
thisExp.addData('image_22.stopped', image_22.tStopRefresh)
thisExp.addData('text_8.started', text_8.tStartRefresh)
thisExp.addData('text_8.stopped', text_8.tStopRefresh)
sound_6.stop()  # ensure sound has stopped at end of routine
thisExp.addData('sound_6.started', sound_6.tStartRefresh)
thisExp.addData('sound_6.stopped', sound_6.tStopRefresh)
thisExp.addData('image_26.started', image_26.tStartRefresh)
thisExp.addData('image_26.stopped', image_26.tStopRefresh)
# check responses
if key_resp_8.keys in ['', [], None]:  # No response was made
    key_resp_8.keys = None
thisExp.addData('key_resp_8.keys',key_resp_8.keys)
if key_resp_8.keys != None:  # we had a response
    thisExp.addData('key_resp_8.rt', key_resp_8.rt)
thisExp.addData('key_resp_8.started', key_resp_8.tStartRefresh)
thisExp.addData('key_resp_8.stopped', key_resp_8.tStopRefresh)
thisExp.nextEntry()
# the Routine "instruction_2_4" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instruction_2_5"-------
continueRoutine = True
# update component parameters for each repeat
sound_7.setSound('audio/F10.wav', secs=30, hamming=True)
sound_7.setVolume(1, log=False)
key_resp_11.keys = []
key_resp_11.rt = []
_key_resp_11_allKeys = []
# keep track of which components have finished
instruction_2_5Components = [image_27, image_29, text_9, sound_7, image_30, key_resp_11]
for thisComponent in instruction_2_5Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instruction_2_5Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instruction_2_5"-------
while continueRoutine:
    # get current time
    t = instruction_2_5Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instruction_2_5Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_27* updates
    if image_27.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_27.frameNStart = frameN  # exact frame index
        image_27.tStart = t  # local t and not account for scr refresh
        image_27.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_27, 'tStartRefresh')  # time at next scr refresh
        image_27.setAutoDraw(True)
    
    # *image_29* updates
    if image_29.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_29.frameNStart = frameN  # exact frame index
        image_29.tStart = t  # local t and not account for scr refresh
        image_29.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_29, 'tStartRefresh')  # time at next scr refresh
        image_29.setAutoDraw(True)
    
    # *text_9* updates
    if text_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_9.frameNStart = frameN  # exact frame index
        text_9.tStart = t  # local t and not account for scr refresh
        text_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_9, 'tStartRefresh')  # time at next scr refresh
        text_9.setAutoDraw(True)
    # start/stop sound_7
    if sound_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sound_7.frameNStart = frameN  # exact frame index
        sound_7.tStart = t  # local t and not account for scr refresh
        sound_7.tStartRefresh = tThisFlipGlobal  # on global time
        sound_7.play(when=win)  # sync with win flip
    if sound_7.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > sound_7.tStartRefresh + 30-frameTolerance:
            # keep track of stop time/frame for later
            sound_7.tStop = t  # not accounting for scr refresh
            sound_7.frameNStop = frameN  # exact frame index
            win.timeOnFlip(sound_7, 'tStopRefresh')  # time at next scr refresh
            sound_7.stop()
    
    # *image_30* updates
    if image_30.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        image_30.frameNStart = frameN  # exact frame index
        image_30.tStart = t  # local t and not account for scr refresh
        image_30.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_30, 'tStartRefresh')  # time at next scr refresh
        image_30.setAutoDraw(True)
    
    # *key_resp_11* updates
    waitOnFlip = False
    if key_resp_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_11.frameNStart = frameN  # exact frame index
        key_resp_11.tStart = t  # local t and not account for scr refresh
        key_resp_11.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_11, 'tStartRefresh')  # time at next scr refresh
        key_resp_11.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_11.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_11.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_11.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_11.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_11_allKeys.extend(theseKeys)
        if len(_key_resp_11_allKeys):
            key_resp_11.keys = _key_resp_11_allKeys[-1].name  # just the last key pressed
            key_resp_11.rt = _key_resp_11_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instruction_2_5Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instruction_2_5"-------
for thisComponent in instruction_2_5Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('image_27.started', image_27.tStartRefresh)
thisExp.addData('image_27.stopped', image_27.tStopRefresh)
thisExp.addData('image_29.started', image_29.tStartRefresh)
thisExp.addData('image_29.stopped', image_29.tStopRefresh)
thisExp.addData('text_9.started', text_9.tStartRefresh)
thisExp.addData('text_9.stopped', text_9.tStopRefresh)
sound_7.stop()  # ensure sound has stopped at end of routine
thisExp.addData('sound_7.started', sound_7.tStartRefresh)
thisExp.addData('sound_7.stopped', sound_7.tStopRefresh)
thisExp.addData('image_30.started', image_30.tStartRefresh)
thisExp.addData('image_30.stopped', image_30.tStopRefresh)
# check responses
if key_resp_11.keys in ['', [], None]:  # No response was made
    key_resp_11.keys = None
thisExp.addData('key_resp_11.keys',key_resp_11.keys)
if key_resp_11.keys != None:  # we had a response
    thisExp.addData('key_resp_11.rt', key_resp_11.rt)
thisExp.addData('key_resp_11.started', key_resp_11.tStartRefresh)
thisExp.addData('key_resp_11.stopped', key_resp_11.tStopRefresh)
thisExp.nextEntry()
# the Routine "instruction_2_5" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
block = data.TrialHandler(nReps=3, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='block')
thisExp.addLoop(block)  # add the loop to the experiment
thisBlock = block.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
if thisBlock != None:
    for paramName in thisBlock:
        exec('{} = thisBlock[paramName]'.format(paramName))

for thisBlock in block:
    currentLoop = block
    # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
    if thisBlock != None:
        for paramName in thisBlock:
            exec('{} = thisBlock[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Instructions_3"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_16.keys = []
    key_resp_16.rt = []
    _key_resp_16_allKeys = []
    sound_24.setSound('audio/F11.wav', secs=40, hamming=True)
    sound_24.setVolume(1, log=False)
    # keep track of which components have finished
    Instructions_3Components = [image_49, key_resp_16, sound_24]
    for thisComponent in Instructions_3Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Instructions_3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Instructions_3"-------
    while continueRoutine:
        # get current time
        t = Instructions_3Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Instructions_3Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_49* updates
        if image_49.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_49.frameNStart = frameN  # exact frame index
            image_49.tStart = t  # local t and not account for scr refresh
            image_49.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_49, 'tStartRefresh')  # time at next scr refresh
            image_49.setAutoDraw(True)
        
        # *key_resp_16* updates
        waitOnFlip = False
        if key_resp_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_16.frameNStart = frameN  # exact frame index
            key_resp_16.tStart = t  # local t and not account for scr refresh
            key_resp_16.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_16, 'tStartRefresh')  # time at next scr refresh
            key_resp_16.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_16.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_16.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_16.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_16.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_16_allKeys.extend(theseKeys)
            if len(_key_resp_16_allKeys):
                key_resp_16.keys = _key_resp_16_allKeys[-1].name  # just the last key pressed
                key_resp_16.rt = _key_resp_16_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        # start/stop sound_24
        if sound_24.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_24.frameNStart = frameN  # exact frame index
            sound_24.tStart = t  # local t and not account for scr refresh
            sound_24.tStartRefresh = tThisFlipGlobal  # on global time
            sound_24.play(when=win)  # sync with win flip
        if sound_24.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_24.tStartRefresh + 40-frameTolerance:
                # keep track of stop time/frame for later
                sound_24.tStop = t  # not accounting for scr refresh
                sound_24.frameNStop = frameN  # exact frame index
                win.timeOnFlip(sound_24, 'tStopRefresh')  # time at next scr refresh
                sound_24.stop()
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Instructions_3Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Instructions_3"-------
    for thisComponent in Instructions_3Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    block.addData('image_49.started', image_49.tStartRefresh)
    block.addData('image_49.stopped', image_49.tStopRefresh)
    # check responses
    if key_resp_16.keys in ['', [], None]:  # No response was made
        key_resp_16.keys = None
    block.addData('key_resp_16.keys',key_resp_16.keys)
    if key_resp_16.keys != None:  # we had a response
        block.addData('key_resp_16.rt', key_resp_16.rt)
    block.addData('key_resp_16.started', key_resp_16.tStartRefresh)
    block.addData('key_resp_16.stopped', key_resp_16.tStopRefresh)
    sound_24.stop()  # ensure sound has stopped at end of routine
    # the Routine "Instructions_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=1, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('conditions_mixed.xlsx'),
        seed=None, name='trials')
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    for thisTrial in trials:
        currentLoop = trials
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                exec('{} = thisTrial[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "inter_trial_interval"-------
        continueRoutine = True
        routineTimer.add(0.800000)
        # update component parameters for each repeat
        # keep track of which components have finished
        inter_trial_intervalComponents = [image_31, image_32]
        for thisComponent in inter_trial_intervalComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        inter_trial_intervalClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "inter_trial_interval"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = inter_trial_intervalClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=inter_trial_intervalClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_31* updates
            if image_31.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_31.frameNStart = frameN  # exact frame index
                image_31.tStart = t  # local t and not account for scr refresh
                image_31.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_31, 'tStartRefresh')  # time at next scr refresh
                image_31.setAutoDraw(True)
            if image_31.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_31.tStartRefresh + 0.8-frameTolerance:
                    # keep track of stop time/frame for later
                    image_31.tStop = t  # not accounting for scr refresh
                    image_31.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_31, 'tStopRefresh')  # time at next scr refresh
                    image_31.setAutoDraw(False)
            
            # *image_32* updates
            if image_32.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_32.frameNStart = frameN  # exact frame index
                image_32.tStart = t  # local t and not account for scr refresh
                image_32.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_32, 'tStartRefresh')  # time at next scr refresh
                image_32.setAutoDraw(True)
            if image_32.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_32.tStartRefresh + 0.8-frameTolerance:
                    # keep track of stop time/frame for later
                    image_32.tStop = t  # not accounting for scr refresh
                    image_32.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_32, 'tStopRefresh')  # time at next scr refresh
                    image_32.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in inter_trial_intervalComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "inter_trial_interval"-------
        for thisComponent in inter_trial_intervalComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        
        # ------Prepare to start Routine "ISIcode"-------
        continueRoutine = True
        # update component parameters for each repeat
        # keep track of which components have finished
        ISIcodeComponents = []
        for thisComponent in ISIcodeComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        ISIcodeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "ISIcode"-------
        while continueRoutine:
            # get current time
            t = ISIcodeClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=ISIcodeClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in ISIcodeComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "ISIcode"-------
        for thisComponent in ISIcodeComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # pick the ISI for the next routine
        # this code component is set to 'both' because we need to remove the 'np'
        # at the start of np.linspace (this is a python library JS won't know what to call. 
        
        # make range from a to b in n stepsizes
        ISIRange = np.linspace(1000, 3500, 500)
        
        # picking from a shuffled array is easier for random selection in JS
        shuffle(ISIRange)
        thisISI = ISIRange[0]/1000 # the first item of the shuffled array 
        
        # show in console for debugging
        print('thisISI: ', thisISI)
        
        # save this ISI to our output file
        trials.addData('ISI', thisISI)
        
        # the Routine "ISIcode" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "fixation"-------
        continueRoutine = True
        # update component parameters for each repeat
        # keep track of which components have finished
        fixationComponents = [image_35, image_33, image_34]
        for thisComponent in fixationComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        fixationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "fixation"-------
        while continueRoutine:
            # get current time
            t = fixationClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=fixationClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_35* updates
            if image_35.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_35.frameNStart = frameN  # exact frame index
                image_35.tStart = t  # local t and not account for scr refresh
                image_35.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_35, 'tStartRefresh')  # time at next scr refresh
                image_35.setAutoDraw(True)
            if image_35.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_35.tStartRefresh + thisISI-frameTolerance:
                    # keep track of stop time/frame for later
                    image_35.tStop = t  # not accounting for scr refresh
                    image_35.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_35, 'tStopRefresh')  # time at next scr refresh
                    image_35.setAutoDraw(False)
            
            # *image_33* updates
            if image_33.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_33.frameNStart = frameN  # exact frame index
                image_33.tStart = t  # local t and not account for scr refresh
                image_33.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_33, 'tStartRefresh')  # time at next scr refresh
                image_33.setAutoDraw(True)
            if image_33.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_33.tStartRefresh + thisISI-frameTolerance:
                    # keep track of stop time/frame for later
                    image_33.tStop = t  # not accounting for scr refresh
                    image_33.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_33, 'tStopRefresh')  # time at next scr refresh
                    image_33.setAutoDraw(False)
            
            # *image_34* updates
            if image_34.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_34.frameNStart = frameN  # exact frame index
                image_34.tStart = t  # local t and not account for scr refresh
                image_34.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_34, 'tStartRefresh')  # time at next scr refresh
                image_34.setAutoDraw(True)
            if image_34.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_34.tStartRefresh + thisISI-frameTolerance:
                    # keep track of stop time/frame for later
                    image_34.tStop = t  # not accounting for scr refresh
                    image_34.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_34, 'tStopRefresh')  # time at next scr refresh
                    image_34.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in fixationComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "fixation"-------
        for thisComponent in fixationComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('image_35.started', image_35.tStartRefresh)
        trials.addData('image_35.stopped', image_35.tStopRefresh)
        trials.addData('image_33.started', image_33.tStartRefresh)
        trials.addData('image_33.stopped', image_33.tStopRefresh)
        trials.addData('image_34.started', image_34.tStartRefresh)
        trials.addData('image_34.stopped', image_34.tStopRefresh)
        # the Routine "fixation" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "Cue"-------
        continueRoutine = True
        routineTimer.add(1.000000)
        # update component parameters for each repeat
        # keep track of which components have finished
        CueComponents = [image_38, image_36, image_37]
        for thisComponent in CueComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        CueClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Cue"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = CueClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=CueClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_38* updates
            if image_38.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_38.frameNStart = frameN  # exact frame index
                image_38.tStart = t  # local t and not account for scr refresh
                image_38.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_38, 'tStartRefresh')  # time at next scr refresh
                image_38.setAutoDraw(True)
            if image_38.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_38.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    image_38.tStop = t  # not accounting for scr refresh
                    image_38.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_38, 'tStopRefresh')  # time at next scr refresh
                    image_38.setAutoDraw(False)
            
            # *image_36* updates
            if image_36.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_36.frameNStart = frameN  # exact frame index
                image_36.tStart = t  # local t and not account for scr refresh
                image_36.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_36, 'tStartRefresh')  # time at next scr refresh
                image_36.setAutoDraw(True)
            if image_36.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_36.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    image_36.tStop = t  # not accounting for scr refresh
                    image_36.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_36, 'tStopRefresh')  # time at next scr refresh
                    image_36.setAutoDraw(False)
            
            # *image_37* updates
            if image_37.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_37.frameNStart = frameN  # exact frame index
                image_37.tStart = t  # local t and not account for scr refresh
                image_37.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_37, 'tStartRefresh')  # time at next scr refresh
                image_37.setAutoDraw(True)
            if image_37.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_37.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    image_37.tStop = t  # not accounting for scr refresh
                    image_37.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_37, 'tStopRefresh')  # time at next scr refresh
                    image_37.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in CueComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Cue"-------
        for thisComponent in CueComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('image_38.started', image_38.tStartRefresh)
        trials.addData('image_38.stopped', image_38.tStopRefresh)
        trials.addData('image_36.started', image_36.tStartRefresh)
        trials.addData('image_36.stopped', image_36.tStopRefresh)
        trials.addData('image_37.started', image_37.tStartRefresh)
        trials.addData('image_37.stopped', image_37.tStopRefresh)
        
        # ------Prepare to start Routine "Stim"-------
        continueRoutine = True
        routineTimer.add(10.000000)
        # update component parameters for each repeat
        image_39.setOpacity(1)
        image_39.setPos((0, .2))
        image_39.setSize((0.5, 0.5))
        image_39.setOri(0)
        image_39.setImage(empty)
        image_41.setOpacity(1)
        image_41.setPos((0, .2))
        image_41.setSize((0.5, 0.5))
        image_41.setOri(0)
        image_41.setImage(middle)
        image.setOpacity(1)
        image.setPos((-0.4, -0.2))
        image.setSize((0.15, 0.15))
        image.setOri(0)
        image.setImage(left_arrow)
        image_2.setOpacity(1)
        image_2.setPos((0.4,-0.2))
        image_2.setSize((0.15, 0.15))
        image_2.setOri(0)
        image_2.setImage(right_arrow)
        key_resp_2.keys = []
        key_resp_2.rt = []
        _key_resp_2_allKeys = []
        # keep track of which components have finished
        StimComponents = [image_39, image_41, image, image_2, key_resp_2]
        for thisComponent in StimComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        StimClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Stim"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = StimClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=StimClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_39* updates
            if image_39.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                image_39.frameNStart = frameN  # exact frame index
                image_39.tStart = t  # local t and not account for scr refresh
                image_39.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_39, 'tStartRefresh')  # time at next scr refresh
                image_39.setAutoDraw(True)
            if image_39.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_39.tStartRefresh + 0.1-frameTolerance:
                    # keep track of stop time/frame for later
                    image_39.tStop = t  # not accounting for scr refresh
                    image_39.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_39, 'tStopRefresh')  # time at next scr refresh
                    image_39.setAutoDraw(False)
            
            # *image_41* updates
            if image_41.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
                # keep track of start time/frame for later
                image_41.frameNStart = frameN  # exact frame index
                image_41.tStart = t  # local t and not account for scr refresh
                image_41.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_41, 'tStartRefresh')  # time at next scr refresh
                image_41.setAutoDraw(True)
            if image_41.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_41.tStartRefresh + 9.9-frameTolerance:
                    # keep track of stop time/frame for later
                    image_41.tStop = t  # not accounting for scr refresh
                    image_41.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_41, 'tStopRefresh')  # time at next scr refresh
                    image_41.setAutoDraw(False)
            
            # *image* updates
            if image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image.frameNStart = frameN  # exact frame index
                image.tStart = t  # local t and not account for scr refresh
                image.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
                image.setAutoDraw(True)
            if image.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image.tStartRefresh + 10-frameTolerance:
                    # keep track of stop time/frame for later
                    image.tStop = t  # not accounting for scr refresh
                    image.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image, 'tStopRefresh')  # time at next scr refresh
                    image.setAutoDraw(False)
            
            # *image_2* updates
            if image_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_2.frameNStart = frameN  # exact frame index
                image_2.tStart = t  # local t and not account for scr refresh
                image_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
                image_2.setAutoDraw(True)
            if image_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_2.tStartRefresh + 10-frameTolerance:
                    # keep track of stop time/frame for later
                    image_2.tStop = t  # not accounting for scr refresh
                    image_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_2, 'tStopRefresh')  # time at next scr refresh
                    image_2.setAutoDraw(False)
            
            # *key_resp_2* updates
            waitOnFlip = False
            if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_2.frameNStart = frameN  # exact frame index
                key_resp_2.tStart = t  # local t and not account for scr refresh
                key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
                key_resp_2.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > key_resp_2.tStartRefresh + 10-frameTolerance:
                    # keep track of stop time/frame for later
                    key_resp_2.tStop = t  # not accounting for scr refresh
                    key_resp_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(key_resp_2, 'tStopRefresh')  # time at next scr refresh
                    key_resp_2.status = FINISHED
            if key_resp_2.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_2.getKeys(keyList=['z', 'm', 'None'], waitRelease=False)
                _key_resp_2_allKeys.extend(theseKeys)
                if len(_key_resp_2_allKeys):
                    key_resp_2.keys = _key_resp_2_allKeys[0].name  # just the first key pressed
                    key_resp_2.rt = _key_resp_2_allKeys[0].rt
                    # was this correct?
                    if (key_resp_2.keys == str(corrAns)) or (key_resp_2.keys == corrAns):
                        key_resp_2.corr = 1
                    else:
                        key_resp_2.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in StimComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Stim"-------
        for thisComponent in StimComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('image_39.started', image_39.tStartRefresh)
        trials.addData('image_39.stopped', image_39.tStopRefresh)
        trials.addData('image_41.started', image_41.tStartRefresh)
        trials.addData('image_41.stopped', image_41.tStopRefresh)
        trials.addData('image.started', image.tStartRefresh)
        trials.addData('image.stopped', image.tStopRefresh)
        trials.addData('image_2.started', image_2.tStartRefresh)
        trials.addData('image_2.stopped', image_2.tStopRefresh)
        # check responses
        if key_resp_2.keys in ['', [], None]:  # No response was made
            key_resp_2.keys = None
            # was no response the correct answer?!
            if str(corrAns).lower() == 'none':
               key_resp_2.corr = 1;  # correct non-response
            else:
               key_resp_2.corr = 0;  # failed to respond (incorrectly)
        # store data for trials (TrialHandler)
        trials.addData('key_resp_2.keys',key_resp_2.keys)
        trials.addData('key_resp_2.corr', key_resp_2.corr)
        if key_resp_2.keys != None:  # we had a response
            trials.addData('key_resp_2.rt', key_resp_2.rt)
        trials.addData('key_resp_2.started', key_resp_2.tStartRefresh)
        trials.addData('key_resp_2.stopped', key_resp_2.tStopRefresh)
        
        # ------Prepare to start Routine "Feedback"-------
        continueRoutine = True
        routineTimer.add(5.000000)
        # update component parameters for each repeat
        if key_resp_2.keys:
            if key_resp_2.keys[0] =='z':
                if key_resp_2.corr:
                    left = 'img/left_arrow_border.png'
                    right = 'img/right_arrow.png'
                    audio = 'audio/F-b.wav'
                else:
                    left = 'img/left_arrow.png'
                    right = 'img/right_arrow_red.png'
                    audio = 'audio/F-a.wav'
        
            elif key_resp_2.keys[0] =='m':
                if key_resp_2.corr:
                    right = 'img/right_arrow_border.png'
                    left = 'img/left_arrow.png'
                    audio = 'audio/F-b.wav'
                else:
                    left = 'img/left_arrow_red.png'
                    right = 'img/right_arrow.png'
                    audio= 'audio/F-a.wav'
        else:
            if corrAns == 'm':
                        left = 'img/left_arrow.png'
                        right = 'img/right_arrow_red.png'
                        audio= 'audio/F-a.wav'
            else:
                    right = 'img/right_arrow.png'
                    left = 'img/left_arrow_red.png'
                    audio= 'audio/F-a.wav'
        image_42.setOpacity(1)
        image_42.setPos((0, .2))
        image_42.setSize((0.5, 0.5))
        image_42.setOri(0)
        image_42.setImage(middle)
        image_3.setOpacity(1)
        image_3.setPos((-0.4, -0.2))
        image_3.setSize((0.15, 0.15))
        image_3.setOri(0)
        image_3.setImage(left)
        image_43.setOpacity(1)
        image_43.setPos((0.4,-0.2))
        image_43.setSize((0.15, 0.15))
        image_43.setOri(0)
        image_43.setImage(right)
        sound_9.setSound(audio, secs=5, hamming=True)
        sound_9.setVolume(1, log=False)
        # keep track of which components have finished
        FeedbackComponents = [image_42, image_3, image_43, sound_9]
        for thisComponent in FeedbackComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        FeedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Feedback"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = FeedbackClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=FeedbackClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_42* updates
            if image_42.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                image_42.frameNStart = frameN  # exact frame index
                image_42.tStart = t  # local t and not account for scr refresh
                image_42.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_42, 'tStartRefresh')  # time at next scr refresh
                image_42.setAutoDraw(True)
            if image_42.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_42.tStartRefresh + 5-frameTolerance:
                    # keep track of stop time/frame for later
                    image_42.tStop = t  # not accounting for scr refresh
                    image_42.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_42, 'tStopRefresh')  # time at next scr refresh
                    image_42.setAutoDraw(False)
            
            # *image_3* updates
            if image_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_3.frameNStart = frameN  # exact frame index
                image_3.tStart = t  # local t and not account for scr refresh
                image_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_3, 'tStartRefresh')  # time at next scr refresh
                image_3.setAutoDraw(True)
            if image_3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_3.tStartRefresh + 5-frameTolerance:
                    # keep track of stop time/frame for later
                    image_3.tStop = t  # not accounting for scr refresh
                    image_3.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_3, 'tStopRefresh')  # time at next scr refresh
                    image_3.setAutoDraw(False)
            
            # *image_43* updates
            if image_43.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_43.frameNStart = frameN  # exact frame index
                image_43.tStart = t  # local t and not account for scr refresh
                image_43.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_43, 'tStartRefresh')  # time at next scr refresh
                image_43.setAutoDraw(True)
            if image_43.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_43.tStartRefresh + 5-frameTolerance:
                    # keep track of stop time/frame for later
                    image_43.tStop = t  # not accounting for scr refresh
                    image_43.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_43, 'tStopRefresh')  # time at next scr refresh
                    image_43.setAutoDraw(False)
            # start/stop sound_9
            if sound_9.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                sound_9.frameNStart = frameN  # exact frame index
                sound_9.tStart = t  # local t and not account for scr refresh
                sound_9.tStartRefresh = tThisFlipGlobal  # on global time
                sound_9.play(when=win)  # sync with win flip
            if sound_9.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > sound_9.tStartRefresh + 5-frameTolerance:
                    # keep track of stop time/frame for later
                    sound_9.tStop = t  # not accounting for scr refresh
                    sound_9.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(sound_9, 'tStopRefresh')  # time at next scr refresh
                    sound_9.stop()
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in FeedbackComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Feedback"-------
        for thisComponent in FeedbackComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('image_42.started', image_42.tStartRefresh)
        trials.addData('image_42.stopped', image_42.tStopRefresh)
        trials.addData('image_3.started', image_3.tStartRefresh)
        trials.addData('image_3.stopped', image_3.tStopRefresh)
        trials.addData('image_43.started', image_43.tStartRefresh)
        trials.addData('image_43.stopped', image_43.tStopRefresh)
        sound_9.stop()  # ensure sound has stopped at end of routine
        trials.addData('sound_9.started', sound_9.tStartRefresh)
        trials.addData('sound_9.stopped', sound_9.tStopRefresh)
        
        # ------Prepare to start Routine "UpdateAccuracy"-------
        continueRoutine = True
        # update component parameters for each repeat
        if key_resp_2.keys:
            if key_resp_2.corr:
                counterOne +=1
            else:
                counterTwo +=1
        else:
            key_resp_2.corr = 0
            counterTwo +=1
        # keep track of which components have finished
        UpdateAccuracyComponents = []
        for thisComponent in UpdateAccuracyComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        UpdateAccuracyClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "UpdateAccuracy"-------
        while continueRoutine:
            # get current time
            t = UpdateAccuracyClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=UpdateAccuracyClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in UpdateAccuracyComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "UpdateAccuracy"-------
        for thisComponent in UpdateAccuracyComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "UpdateAccuracy" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1 repeats of 'trials'
    
    
    # ------Prepare to start Routine "continueStatus"-------
    continueRoutine = True
    # update component parameters for each repeat
    if counterOne >= 3:
        outPut = '做得好，练习结束了。'+'\n'+'\n'+'让我们开始正式实验吧！'+'\n'+'\n'+'按空格键继续。'
        audio = 'audio/F-d.wav'
        block.finished = True
    if counterTwo>1:
        outPut = '很遗憾，这次练习失败了，让我们再试一次。'+'\n'+'\n'+'\n'+'按空格键继续。'
        audio = 'audio/F-e.wav'
        isForward += 1
        block.finished = False
        counterOne = 0
        counterTwo = 0
        if isForward == 3:
            outPut = '很遗憾，您没能通过练习环节。'+'\n'+'\n'+'任务结束，感谢您的参与。'
            audio = 'audio/F-g.wav'
            block.finished = True
    key_resp_18.keys = []
    key_resp_18.rt = []
    _key_resp_18_allKeys = []
    sound_10.setSound(audio, secs=20, hamming=True)
    sound_10.setVolume(1.0, log=False)
    # keep track of which components have finished
    continueStatusComponents = [text_24, key_resp_18, sound_10]
    for thisComponent in continueStatusComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    continueStatusClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "continueStatus"-------
    while continueRoutine:
        # get current time
        t = continueStatusClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=continueStatusClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_24* updates
        if text_24.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_24.frameNStart = frameN  # exact frame index
            text_24.tStart = t  # local t and not account for scr refresh
            text_24.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_24, 'tStartRefresh')  # time at next scr refresh
            text_24.setAutoDraw(True)
        if text_24.status == STARTED:  # only update if drawing
            text_24.setText(outPut, log=False)
        
        # *key_resp_18* updates
        waitOnFlip = False
        if key_resp_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_18.frameNStart = frameN  # exact frame index
            key_resp_18.tStart = t  # local t and not account for scr refresh
            key_resp_18.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_18, 'tStartRefresh')  # time at next scr refresh
            key_resp_18.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_18.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_18.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_18.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_18.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_18_allKeys.extend(theseKeys)
            if len(_key_resp_18_allKeys):
                key_resp_18.keys = _key_resp_18_allKeys[-1].name  # just the last key pressed
                key_resp_18.rt = _key_resp_18_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        # start/stop sound_10
        if sound_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_10.frameNStart = frameN  # exact frame index
            sound_10.tStart = t  # local t and not account for scr refresh
            sound_10.tStartRefresh = tThisFlipGlobal  # on global time
            sound_10.play(when=win)  # sync with win flip
        if sound_10.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_10.tStartRefresh + 20-frameTolerance:
                # keep track of stop time/frame for later
                sound_10.tStop = t  # not accounting for scr refresh
                sound_10.frameNStop = frameN  # exact frame index
                win.timeOnFlip(sound_10, 'tStopRefresh')  # time at next scr refresh
                sound_10.stop()
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in continueStatusComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "continueStatus"-------
    for thisComponent in continueStatusComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    if isForward == 3:
        core.quit()
    # check responses
    if key_resp_18.keys in ['', [], None]:  # No response was made
        key_resp_18.keys = None
    block.addData('key_resp_18.keys',key_resp_18.keys)
    if key_resp_18.keys != None:  # we had a response
        block.addData('key_resp_18.rt', key_resp_18.rt)
    block.addData('key_resp_18.started', key_resp_18.tStartRefresh)
    block.addData('key_resp_18.stopped', key_resp_18.tStopRefresh)
    sound_10.stop()  # ensure sound has stopped at end of routine
    # the Routine "continueStatus" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 3 repeats of 'block'


# ------Prepare to start Routine "Main_Exp_Instructions"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_9.keys = []
key_resp_9.rt = []
_key_resp_9_allKeys = []
sound_13.setSound('audio/F12.wav', secs=40, hamming=True)
sound_13.setVolume(1, log=False)
# keep track of which components have finished
Main_Exp_InstructionsComponents = [image_40, key_resp_9, sound_13]
for thisComponent in Main_Exp_InstructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Main_Exp_InstructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Main_Exp_Instructions"-------
while continueRoutine:
    # get current time
    t = Main_Exp_InstructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Main_Exp_InstructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_40* updates
    if image_40.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_40.frameNStart = frameN  # exact frame index
        image_40.tStart = t  # local t and not account for scr refresh
        image_40.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_40, 'tStartRefresh')  # time at next scr refresh
        image_40.setAutoDraw(True)
    
    # *key_resp_9* updates
    waitOnFlip = False
    if key_resp_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_9.frameNStart = frameN  # exact frame index
        key_resp_9.tStart = t  # local t and not account for scr refresh
        key_resp_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_9, 'tStartRefresh')  # time at next scr refresh
        key_resp_9.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_9.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_9.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_9.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_9.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_9_allKeys.extend(theseKeys)
        if len(_key_resp_9_allKeys):
            key_resp_9.keys = _key_resp_9_allKeys[-1].name  # just the last key pressed
            key_resp_9.rt = _key_resp_9_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    # start/stop sound_13
    if sound_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sound_13.frameNStart = frameN  # exact frame index
        sound_13.tStart = t  # local t and not account for scr refresh
        sound_13.tStartRefresh = tThisFlipGlobal  # on global time
        sound_13.play(when=win)  # sync with win flip
    if sound_13.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > sound_13.tStartRefresh + 40-frameTolerance:
            # keep track of stop time/frame for later
            sound_13.tStop = t  # not accounting for scr refresh
            sound_13.frameNStop = frameN  # exact frame index
            win.timeOnFlip(sound_13, 'tStopRefresh')  # time at next scr refresh
            sound_13.stop()
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Main_Exp_InstructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Main_Exp_Instructions"-------
for thisComponent in Main_Exp_InstructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_9.keys in ['', [], None]:  # No response was made
    key_resp_9.keys = None
thisExp.addData('key_resp_9.keys',key_resp_9.keys)
if key_resp_9.keys != None:  # we had a response
    thisExp.addData('key_resp_9.rt', key_resp_9.rt)
thisExp.addData('key_resp_9.started', key_resp_9.tStartRefresh)
thisExp.addData('key_resp_9.stopped', key_resp_9.tStopRefresh)
thisExp.nextEntry()
sound_13.stop()  # ensure sound has stopped at end of routine
# the Routine "Main_Exp_Instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
test_trials = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('conditions_test(13+7).xlsx'),
    seed=None, name='test_trials')
thisExp.addLoop(test_trials)  # add the loop to the experiment
thisTest_trial = test_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTest_trial.rgb)
if thisTest_trial != None:
    for paramName in thisTest_trial:
        exec('{} = thisTest_trial[paramName]'.format(paramName))

for thisTest_trial in test_trials:
    currentLoop = test_trials
    # abbreviate parameter names if possible (e.g. rgb = thisTest_trial.rgb)
    if thisTest_trial != None:
        for paramName in thisTest_trial:
            exec('{} = thisTest_trial[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    blockn = data.TrialHandler(nReps=1.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(blockfile),
        seed=None, name='blockn')
    thisExp.addLoop(blockn)  # add the loop to the experiment
    thisBlockn = blockn.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisBlockn.rgb)
    if thisBlockn != None:
        for paramName in thisBlockn:
            exec('{} = thisBlockn[paramName]'.format(paramName))
    
    for thisBlockn in blockn:
        currentLoop = blockn
        # abbreviate parameter names if possible (e.g. rgb = thisBlockn.rgb)
        if thisBlockn != None:
            for paramName in thisBlockn:
                exec('{} = thisBlockn[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "inter_trial_interval"-------
        continueRoutine = True
        routineTimer.add(0.800000)
        # update component parameters for each repeat
        # keep track of which components have finished
        inter_trial_intervalComponents = [image_31, image_32]
        for thisComponent in inter_trial_intervalComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        inter_trial_intervalClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "inter_trial_interval"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = inter_trial_intervalClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=inter_trial_intervalClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_31* updates
            if image_31.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_31.frameNStart = frameN  # exact frame index
                image_31.tStart = t  # local t and not account for scr refresh
                image_31.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_31, 'tStartRefresh')  # time at next scr refresh
                image_31.setAutoDraw(True)
            if image_31.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_31.tStartRefresh + 0.8-frameTolerance:
                    # keep track of stop time/frame for later
                    image_31.tStop = t  # not accounting for scr refresh
                    image_31.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_31, 'tStopRefresh')  # time at next scr refresh
                    image_31.setAutoDraw(False)
            
            # *image_32* updates
            if image_32.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_32.frameNStart = frameN  # exact frame index
                image_32.tStart = t  # local t and not account for scr refresh
                image_32.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_32, 'tStartRefresh')  # time at next scr refresh
                image_32.setAutoDraw(True)
            if image_32.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_32.tStartRefresh + 0.8-frameTolerance:
                    # keep track of stop time/frame for later
                    image_32.tStop = t  # not accounting for scr refresh
                    image_32.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_32, 'tStopRefresh')  # time at next scr refresh
                    image_32.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in inter_trial_intervalComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "inter_trial_interval"-------
        for thisComponent in inter_trial_intervalComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        
        # ------Prepare to start Routine "ISIcode"-------
        continueRoutine = True
        # update component parameters for each repeat
        # keep track of which components have finished
        ISIcodeComponents = []
        for thisComponent in ISIcodeComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        ISIcodeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "ISIcode"-------
        while continueRoutine:
            # get current time
            t = ISIcodeClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=ISIcodeClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in ISIcodeComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "ISIcode"-------
        for thisComponent in ISIcodeComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # pick the ISI for the next routine
        # this code component is set to 'both' because we need to remove the 'np'
        # at the start of np.linspace (this is a python library JS won't know what to call. 
        
        # make range from a to b in n stepsizes
        ISIRange = np.linspace(1000, 3500, 500)
        
        # picking from a shuffled array is easier for random selection in JS
        shuffle(ISIRange)
        thisISI = ISIRange[0]/1000 # the first item of the shuffled array 
        
        # show in console for debugging
        print('thisISI: ', thisISI)
        
        # save this ISI to our output file
        trials.addData('ISI', thisISI)
        
        # the Routine "ISIcode" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "fixation"-------
        continueRoutine = True
        # update component parameters for each repeat
        # keep track of which components have finished
        fixationComponents = [image_35, image_33, image_34]
        for thisComponent in fixationComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        fixationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "fixation"-------
        while continueRoutine:
            # get current time
            t = fixationClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=fixationClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_35* updates
            if image_35.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_35.frameNStart = frameN  # exact frame index
                image_35.tStart = t  # local t and not account for scr refresh
                image_35.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_35, 'tStartRefresh')  # time at next scr refresh
                image_35.setAutoDraw(True)
            if image_35.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_35.tStartRefresh + thisISI-frameTolerance:
                    # keep track of stop time/frame for later
                    image_35.tStop = t  # not accounting for scr refresh
                    image_35.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_35, 'tStopRefresh')  # time at next scr refresh
                    image_35.setAutoDraw(False)
            
            # *image_33* updates
            if image_33.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_33.frameNStart = frameN  # exact frame index
                image_33.tStart = t  # local t and not account for scr refresh
                image_33.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_33, 'tStartRefresh')  # time at next scr refresh
                image_33.setAutoDraw(True)
            if image_33.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_33.tStartRefresh + thisISI-frameTolerance:
                    # keep track of stop time/frame for later
                    image_33.tStop = t  # not accounting for scr refresh
                    image_33.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_33, 'tStopRefresh')  # time at next scr refresh
                    image_33.setAutoDraw(False)
            
            # *image_34* updates
            if image_34.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_34.frameNStart = frameN  # exact frame index
                image_34.tStart = t  # local t and not account for scr refresh
                image_34.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_34, 'tStartRefresh')  # time at next scr refresh
                image_34.setAutoDraw(True)
            if image_34.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_34.tStartRefresh + thisISI-frameTolerance:
                    # keep track of stop time/frame for later
                    image_34.tStop = t  # not accounting for scr refresh
                    image_34.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_34, 'tStopRefresh')  # time at next scr refresh
                    image_34.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in fixationComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "fixation"-------
        for thisComponent in fixationComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        blockn.addData('image_35.started', image_35.tStartRefresh)
        blockn.addData('image_35.stopped', image_35.tStopRefresh)
        blockn.addData('image_33.started', image_33.tStartRefresh)
        blockn.addData('image_33.stopped', image_33.tStopRefresh)
        blockn.addData('image_34.started', image_34.tStartRefresh)
        blockn.addData('image_34.stopped', image_34.tStopRefresh)
        # the Routine "fixation" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "Cue"-------
        continueRoutine = True
        routineTimer.add(1.000000)
        # update component parameters for each repeat
        # keep track of which components have finished
        CueComponents = [image_38, image_36, image_37]
        for thisComponent in CueComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        CueClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Cue"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = CueClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=CueClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_38* updates
            if image_38.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_38.frameNStart = frameN  # exact frame index
                image_38.tStart = t  # local t and not account for scr refresh
                image_38.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_38, 'tStartRefresh')  # time at next scr refresh
                image_38.setAutoDraw(True)
            if image_38.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_38.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    image_38.tStop = t  # not accounting for scr refresh
                    image_38.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_38, 'tStopRefresh')  # time at next scr refresh
                    image_38.setAutoDraw(False)
            
            # *image_36* updates
            if image_36.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_36.frameNStart = frameN  # exact frame index
                image_36.tStart = t  # local t and not account for scr refresh
                image_36.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_36, 'tStartRefresh')  # time at next scr refresh
                image_36.setAutoDraw(True)
            if image_36.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_36.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    image_36.tStop = t  # not accounting for scr refresh
                    image_36.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_36, 'tStopRefresh')  # time at next scr refresh
                    image_36.setAutoDraw(False)
            
            # *image_37* updates
            if image_37.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_37.frameNStart = frameN  # exact frame index
                image_37.tStart = t  # local t and not account for scr refresh
                image_37.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_37, 'tStartRefresh')  # time at next scr refresh
                image_37.setAutoDraw(True)
            if image_37.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_37.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    image_37.tStop = t  # not accounting for scr refresh
                    image_37.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_37, 'tStopRefresh')  # time at next scr refresh
                    image_37.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in CueComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Cue"-------
        for thisComponent in CueComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        blockn.addData('image_38.started', image_38.tStartRefresh)
        blockn.addData('image_38.stopped', image_38.tStopRefresh)
        blockn.addData('image_36.started', image_36.tStartRefresh)
        blockn.addData('image_36.stopped', image_36.tStopRefresh)
        blockn.addData('image_37.started', image_37.tStartRefresh)
        blockn.addData('image_37.stopped', image_37.tStopRefresh)
        
        # ------Prepare to start Routine "Stim"-------
        continueRoutine = True
        routineTimer.add(10.000000)
        # update component parameters for each repeat
        image_39.setOpacity(1)
        image_39.setPos((0, .2))
        image_39.setSize((0.5, 0.5))
        image_39.setOri(0)
        image_39.setImage(empty)
        image_41.setOpacity(1)
        image_41.setPos((0, .2))
        image_41.setSize((0.5, 0.5))
        image_41.setOri(0)
        image_41.setImage(middle)
        image.setOpacity(1)
        image.setPos((-0.4, -0.2))
        image.setSize((0.15, 0.15))
        image.setOri(0)
        image.setImage(left_arrow)
        image_2.setOpacity(1)
        image_2.setPos((0.4,-0.2))
        image_2.setSize((0.15, 0.15))
        image_2.setOri(0)
        image_2.setImage(right_arrow)
        key_resp_2.keys = []
        key_resp_2.rt = []
        _key_resp_2_allKeys = []
        # keep track of which components have finished
        StimComponents = [image_39, image_41, image, image_2, key_resp_2]
        for thisComponent in StimComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        StimClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Stim"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = StimClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=StimClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_39* updates
            if image_39.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                image_39.frameNStart = frameN  # exact frame index
                image_39.tStart = t  # local t and not account for scr refresh
                image_39.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_39, 'tStartRefresh')  # time at next scr refresh
                image_39.setAutoDraw(True)
            if image_39.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_39.tStartRefresh + 0.1-frameTolerance:
                    # keep track of stop time/frame for later
                    image_39.tStop = t  # not accounting for scr refresh
                    image_39.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_39, 'tStopRefresh')  # time at next scr refresh
                    image_39.setAutoDraw(False)
            
            # *image_41* updates
            if image_41.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
                # keep track of start time/frame for later
                image_41.frameNStart = frameN  # exact frame index
                image_41.tStart = t  # local t and not account for scr refresh
                image_41.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_41, 'tStartRefresh')  # time at next scr refresh
                image_41.setAutoDraw(True)
            if image_41.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_41.tStartRefresh + 9.9-frameTolerance:
                    # keep track of stop time/frame for later
                    image_41.tStop = t  # not accounting for scr refresh
                    image_41.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_41, 'tStopRefresh')  # time at next scr refresh
                    image_41.setAutoDraw(False)
            
            # *image* updates
            if image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image.frameNStart = frameN  # exact frame index
                image.tStart = t  # local t and not account for scr refresh
                image.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
                image.setAutoDraw(True)
            if image.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image.tStartRefresh + 10-frameTolerance:
                    # keep track of stop time/frame for later
                    image.tStop = t  # not accounting for scr refresh
                    image.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image, 'tStopRefresh')  # time at next scr refresh
                    image.setAutoDraw(False)
            
            # *image_2* updates
            if image_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_2.frameNStart = frameN  # exact frame index
                image_2.tStart = t  # local t and not account for scr refresh
                image_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
                image_2.setAutoDraw(True)
            if image_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_2.tStartRefresh + 10-frameTolerance:
                    # keep track of stop time/frame for later
                    image_2.tStop = t  # not accounting for scr refresh
                    image_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_2, 'tStopRefresh')  # time at next scr refresh
                    image_2.setAutoDraw(False)
            
            # *key_resp_2* updates
            waitOnFlip = False
            if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_2.frameNStart = frameN  # exact frame index
                key_resp_2.tStart = t  # local t and not account for scr refresh
                key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
                key_resp_2.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > key_resp_2.tStartRefresh + 10-frameTolerance:
                    # keep track of stop time/frame for later
                    key_resp_2.tStop = t  # not accounting for scr refresh
                    key_resp_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(key_resp_2, 'tStopRefresh')  # time at next scr refresh
                    key_resp_2.status = FINISHED
            if key_resp_2.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_2.getKeys(keyList=['z', 'm', 'None'], waitRelease=False)
                _key_resp_2_allKeys.extend(theseKeys)
                if len(_key_resp_2_allKeys):
                    key_resp_2.keys = _key_resp_2_allKeys[0].name  # just the first key pressed
                    key_resp_2.rt = _key_resp_2_allKeys[0].rt
                    # was this correct?
                    if (key_resp_2.keys == str(corrAns)) or (key_resp_2.keys == corrAns):
                        key_resp_2.corr = 1
                    else:
                        key_resp_2.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in StimComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Stim"-------
        for thisComponent in StimComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        blockn.addData('image_39.started', image_39.tStartRefresh)
        blockn.addData('image_39.stopped', image_39.tStopRefresh)
        blockn.addData('image_41.started', image_41.tStartRefresh)
        blockn.addData('image_41.stopped', image_41.tStopRefresh)
        blockn.addData('image.started', image.tStartRefresh)
        blockn.addData('image.stopped', image.tStopRefresh)
        blockn.addData('image_2.started', image_2.tStartRefresh)
        blockn.addData('image_2.stopped', image_2.tStopRefresh)
        # check responses
        if key_resp_2.keys in ['', [], None]:  # No response was made
            key_resp_2.keys = None
            # was no response the correct answer?!
            if str(corrAns).lower() == 'none':
               key_resp_2.corr = 1;  # correct non-response
            else:
               key_resp_2.corr = 0;  # failed to respond (incorrectly)
        # store data for blockn (TrialHandler)
        blockn.addData('key_resp_2.keys',key_resp_2.keys)
        blockn.addData('key_resp_2.corr', key_resp_2.corr)
        if key_resp_2.keys != None:  # we had a response
            blockn.addData('key_resp_2.rt', key_resp_2.rt)
        blockn.addData('key_resp_2.started', key_resp_2.tStartRefresh)
        blockn.addData('key_resp_2.stopped', key_resp_2.tStopRefresh)
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'blockn'
    
    thisExp.nextEntry()
    
# completed 1 repeats of 'test_trials'


# ------Prepare to start Routine "finish"-------
continueRoutine = True
routineTimer.add(3.500000)
# update component parameters for each repeat
sound_12.setSound('audio/F-f.wav', secs=3.5, hamming=True)
sound_12.setVolume(1.0, log=False)
# keep track of which components have finished
finishComponents = [text_3, sound_12]
for thisComponent in finishComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
finishClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "finish"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = finishClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=finishClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_3* updates
    if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_3.frameNStart = frameN  # exact frame index
        text_3.tStart = t  # local t and not account for scr refresh
        text_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
        text_3.setAutoDraw(True)
    if text_3.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_3.tStartRefresh + 3.5-frameTolerance:
            # keep track of stop time/frame for later
            text_3.tStop = t  # not accounting for scr refresh
            text_3.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_3, 'tStopRefresh')  # time at next scr refresh
            text_3.setAutoDraw(False)
    # start/stop sound_12
    if sound_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sound_12.frameNStart = frameN  # exact frame index
        sound_12.tStart = t  # local t and not account for scr refresh
        sound_12.tStartRefresh = tThisFlipGlobal  # on global time
        sound_12.play(when=win)  # sync with win flip
    if sound_12.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > sound_12.tStartRefresh + 3.5-frameTolerance:
            # keep track of stop time/frame for later
            sound_12.tStop = t  # not accounting for scr refresh
            sound_12.frameNStop = frameN  # exact frame index
            win.timeOnFlip(sound_12, 'tStopRefresh')  # time at next scr refresh
            sound_12.stop()
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in finishComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "finish"-------
for thisComponent in finishComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_3.started', text_3.tStartRefresh)
thisExp.addData('text_3.stopped', text_3.tStopRefresh)
sound_12.stop()  # ensure sound has stopped at end of routine

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
