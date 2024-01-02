#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2023.2.2),
    on Tue Nov 28 13:59:03 2023
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# Store info about the experiment session
psychopyVersion = '2023.2.2'
expName = 'Flanker'  # from the Builder filename that created this script
expInfo = {
    '编号': '',
    'date': data.getDateStr(),  # add a simple timestamp
    'expName': expName,
    'psychopyVersion': psychopyVersion,
}


def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # temporarily remove keys which the dialog doesn't need to show
    poppedKeys = {
        'date': expInfo.pop('date', data.getDateStr()),
        'expName': expInfo.pop('expName', expName),
        'psychopyVersion': expInfo.pop('psychopyVersion', psychopyVersion),
    }
    # show participant info dialog
    dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # restore hidden keys
    expInfo.update(poppedKeys)
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/1_1_1_%s_%s_%s' % (expName, expInfo['编号'], expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='/Users/chen-nanwu/Desktop/CEST_v3/1_1_1_Flanker/Flanker_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # this outputs to the screen, not a file
    logging.console.setLevel(logging.DEBUG)
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=[1440, 900], fullscr=True, screen=0,
            winType='pyglet', allowStencil=False,
            monitor='testMonitor', color=[-1,-1,-1], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height'
        )
        if expInfo is not None:
            # store frame rate of monitor if we can measure it
            expInfo['frameRate'] = win.getActualFrameRate()
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [-1,-1,-1]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    win.mouseVisible = False
    win.hideMessage()
    return win


def setupInputs(expInfo, thisExp, win):
    """
    Setup whatever inputs are available (mouse, keyboard, eyetracker, etc.)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    dict
        Dictionary of input devices by name.
    """
    # --- Setup input devices ---
    inputs = {}
    ioConfig = {}
    
    # Setup iohub keyboard
    ioConfig['Keyboard'] = dict(use_keymap='psychopy')
    
    ioSession = '1'
    if 'session' in expInfo:
        ioSession = str(expInfo['session'])
    ioServer = io.launchHubServer(window=win, **ioConfig)
    eyetracker = None
    
    # create a default keyboard (e.g. to check for escape)
    defaultKeyboard = keyboard.Keyboard(backend='iohub')
    # return inputs dict
    return {
        'ioServer': ioServer,
        'defaultKeyboard': defaultKeyboard,
        'eyetracker': eyetracker,
    }

def pauseExperiment(thisExp, inputs=None, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    inputs : dict
        Dictionary of input devices by name.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # prevent components from auto-drawing
    win.stashAutoDraw()
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # make sure we have a keyboard
        if inputs is None:
            inputs = {
                'defaultKeyboard': keyboard.Keyboard(backend='ioHub')
            }
        # check for quit (typically the Esc key)
        if inputs['defaultKeyboard'].getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win, inputs=inputs)
        # flip the screen
        win.flip()
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, inputs=inputs, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # restore auto-drawn components
    win.retrieveAutoDraw()
    # reset any timers
    for timer in timers:
        timer.reset()


def run(expInfo, thisExp, win, inputs, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    inputs : dict
        Dictionary of input devices by name.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = inputs['ioServer']
    defaultKeyboard = inputs['defaultKeyboard']
    eyetracker = inputs['eyetracker']
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "dummy_resources" ---
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
        image='img/right_arrow_red.png', mask=None, anchor='center',
        ori=0, pos=(0, 0), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-5.0)
    image_48 = visual.ImageStim(
        win=win,
        name='image_48', 
        image='img/left_arrow_red.png', mask=None, anchor='center',
        ori=0, pos=(0, 0), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-6.0)
    sound_23 = sound.Sound('audio/F-g.wav', secs=1.0, stereo=True, hamming=True,
        name='sound_23')
    sound_23.setVolume(1)
    
    # --- Initialize components for Routine "JS_code" ---
    
    # --- Initialize components for Routine "instruction_1" ---
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
    
    # --- Initialize components for Routine "instruction_2" ---
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
        image='img/congruent_left.png', mask=None, anchor='center',
        ori=0, pos=(0, 0.38), size=(0.53, 0.53),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_9 = visual.ImageStim(
        win=win,
        name='image_9', 
        image='img/left_arrow.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.25, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    image_10 = visual.ImageStim(
        win=win,
        name='image_10', 
        image='img/right_arrow.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.2), size=(0.25, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-3.0)
    sound_2 = sound.Sound('audio/F3.wav', secs=-1, stereo=True, hamming=True,
        name='sound_2')
    sound_2.setVolume(1)
    key_resp_10 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "instruction_2_1" ---
    image_11 = visual.ImageStim(
        win=win,
        name='image_11', 
        image='img/congruent_left_flash.png', mask=None, anchor='center',
        ori=0, pos=(0, 0.38), size=(0.53, 0.53),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_12 = visual.ImageStim(
        win=win,
        name='image_12', 
        image='img/left_arrow.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.25, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_13 = visual.ImageStim(
        win=win,
        name='image_13', 
        image='img/right_arrow.png', mask=None, anchor='center',
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
        image='img/left_arrow_border.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.25, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-5.0)
    key_resp_5 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "instruction_2_2" ---
    image_14 = visual.ImageStim(
        win=win,
        name='image_14', 
        image='img/congruent_right_flash.png', mask=None, anchor='center',
        ori=0, pos=(0, 0.38), size=(0.53, 0.53),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_15 = visual.ImageStim(
        win=win,
        name='image_15', 
        image='img/left_arrow.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.25, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_16 = visual.ImageStim(
        win=win,
        name='image_16', 
        image='img/right_arrow.png', mask=None, anchor='center',
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
        image='img/right_arrow_border.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.2), size=(0.25, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-5.0)
    key_resp_6 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "instruction_2_3" ---
    image_17 = visual.ImageStim(
        win=win,
        name='image_17', 
        image='img/incongruent_right_flash.png', mask=None, anchor='center',
        ori=0, pos=(0, 0.38), size=(0.53, 0.53),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_18 = visual.ImageStim(
        win=win,
        name='image_18', 
        image='img/left_arrow.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.25, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_19 = visual.ImageStim(
        win=win,
        name='image_19', 
        image='img/right_arrow.png', mask=None, anchor='center',
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
        image='img/right_arrow_border.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.2), size=(0.25, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-5.0)
    key_resp_7 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "instruction_2_4" ---
    image_20 = visual.ImageStim(
        win=win,
        name='image_20', 
        image='img/incongruent_left_flash.png', mask=None, anchor='center',
        ori=0, pos=(0, 0.38), size=(0.53, 0.53),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_21 = visual.ImageStim(
        win=win,
        name='image_21', 
        image='img/left_arrow.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.25, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_22 = visual.ImageStim(
        win=win,
        name='image_22', 
        image='img/right_arrow.png', mask=None, anchor='center',
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
        image='img/left_arrow_border.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.25, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-5.0)
    key_resp_8 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "instruction_2_5" ---
    image_27 = visual.ImageStim(
        win=win,
        name='image_27', 
        image='img/incongruent_left_flash.png', mask=None, anchor='center',
        ori=0, pos=(0, 0.38), size=(0.53, 0.53),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_29 = visual.ImageStim(
        win=win,
        name='image_29', 
        image='img/right_arrow.png', mask=None, anchor='center',
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
        image='img/left_arrow_border.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.25, 0.25),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-4.0)
    key_resp_11 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "Instructions_3" ---
    image_49 = visual.ImageStim(
        win=win,
        name='image_49', 
        image='img/star_text.png', mask=None, anchor='center',
        ori=0, pos=(0, 0), size=(0.9, 0.6),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    key_resp_16 = keyboard.Keyboard()
    sound_24 = sound.Sound('audio/F11.wav', secs=-1, stereo=True, hamming=True,
        name='sound_24')
    sound_24.setVolume(1)
    
    # --- Initialize components for Routine "inter_trial_interval" ---
    image_31 = visual.ImageStim(
        win=win,
        name='image_31', 
        image='img/left_arrow.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.15, 0.15),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_32 = visual.ImageStim(
        win=win,
        name='image_32', 
        image='img/right_arrow.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.2), size=(0.15, 0.15),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    
    # --- Initialize components for Routine "ISIcode" ---
    
    # --- Initialize components for Routine "fixation" ---
    image_35 = visual.ImageStim(
        win=win,
        name='image_35', 
        image='img/star_middle.png', mask=None, anchor='center',
        ori=0, pos=(0, .2), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_33 = visual.ImageStim(
        win=win,
        name='image_33', 
        image='img/left_arrow.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.15, 0.15),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_34 = visual.ImageStim(
        win=win,
        name='image_34', 
        image='img/right_arrow.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.2), size=(0.15, 0.15),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    
    # --- Initialize components for Routine "Cue" ---
    image_38 = visual.ImageStim(
        win=win,
        name='image_38', 
        image='img/middle.jpeg', mask=None, anchor='center',
        ori=0, pos=(0, .2), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_36 = visual.ImageStim(
        win=win,
        name='image_36', 
        image='img/left_arrow.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.15, 0.15),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_37 = visual.ImageStim(
        win=win,
        name='image_37', 
        image='img/right_arrow.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.2), size=(0.15, 0.15),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    
    # --- Initialize components for Routine "Stim" ---
    image_39 = visual.ImageStim(
        win=win,
        name='image_39', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_41 = visual.ImageStim(
        win=win,
        name='image_41', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image = visual.ImageStim(
        win=win,
        name='image', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    image_2 = visual.ImageStim(
        win=win,
        name='image_2', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-3.0)
    key_resp_2 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "Feedback" ---
    image_42 = visual.ImageStim(
        win=win,
        name='image_42', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_3 = visual.ImageStim(
        win=win,
        name='image_3', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    image_43 = visual.ImageStim(
        win=win,
        name='image_43', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-3.0)
    sound_9 = sound.Sound('A', secs=-1, stereo=True, hamming=True,
        name='sound_9')
    sound_9.setVolume(1.0)
    
    # --- Initialize components for Routine "UpdateAccuracy" ---
    # Run 'Begin Experiment' code from code_2
    counterOne=0
    counterTwo=0
    
    # --- Initialize components for Routine "continueStatus" ---
    # Run 'Begin Experiment' code from code_11
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
    
    # --- Initialize components for Routine "Main_Exp_Instructions" ---
    image_40 = visual.ImageStim(
        win=win,
        name='image_40', 
        image='img/star_text_formal.png', mask=None, anchor='center',
        ori=0, pos=(0, 0), size=(0.9, 0.6),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    key_resp_9 = keyboard.Keyboard()
    sound_13 = sound.Sound('audio/F12.wav', secs=-1, stereo=True, hamming=True,
        name='sound_13')
    sound_13.setVolume(1)
    
    # --- Initialize components for Routine "inter_trial_interval" ---
    image_31 = visual.ImageStim(
        win=win,
        name='image_31', 
        image='img/left_arrow.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.15, 0.15),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_32 = visual.ImageStim(
        win=win,
        name='image_32', 
        image='img/right_arrow.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.2), size=(0.15, 0.15),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    
    # --- Initialize components for Routine "ISIcode" ---
    
    # --- Initialize components for Routine "fixation" ---
    image_35 = visual.ImageStim(
        win=win,
        name='image_35', 
        image='img/star_middle.png', mask=None, anchor='center',
        ori=0, pos=(0, .2), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_33 = visual.ImageStim(
        win=win,
        name='image_33', 
        image='img/left_arrow.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.15, 0.15),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_34 = visual.ImageStim(
        win=win,
        name='image_34', 
        image='img/right_arrow.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.2), size=(0.15, 0.15),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    
    # --- Initialize components for Routine "Cue" ---
    image_38 = visual.ImageStim(
        win=win,
        name='image_38', 
        image='img/middle.jpeg', mask=None, anchor='center',
        ori=0, pos=(0, .2), size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_36 = visual.ImageStim(
        win=win,
        name='image_36', 
        image='img/left_arrow.png', mask=None, anchor='center',
        ori=0, pos=(-0.4, -0.2), size=(0.15, 0.15),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image_37 = visual.ImageStim(
        win=win,
        name='image_37', 
        image='img/right_arrow.png', mask=None, anchor='center',
        ori=0, pos=(0.4, -0.2), size=(0.15, 0.15),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    
    # --- Initialize components for Routine "Stim" ---
    image_39 = visual.ImageStim(
        win=win,
        name='image_39', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=0.0)
    image_41 = visual.ImageStim(
        win=win,
        name='image_41', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-1.0)
    image = visual.ImageStim(
        win=win,
        name='image', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-2.0)
    image_2 = visual.ImageStim(
        win=win,
        name='image_2', 
        image='default.png', mask=None, anchor='center',
        ori=1.0, pos=[0,0], size=1.0,
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=512, interpolate=True, depth=-3.0)
    key_resp_2 = keyboard.Keyboard()
    
    # --- Initialize components for Routine "finish" ---
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
    
    # create some handy timers
    if globalClock is None:
        globalClock = core.Clock()  # to track the time since experiment started
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6)
    
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
            globals()[paramName] = thisDummy_trial[paramName]
    
    for thisDummy_trial in dummy_trial:
        currentLoop = dummy_trial
        thisExp.timestampOnFlip(win, 'thisRow.t')
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                inputs=inputs, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisDummy_trial.rgb)
        if thisDummy_trial != None:
            for paramName in thisDummy_trial:
                globals()[paramName] = thisDummy_trial[paramName]
        
        # --- Prepare to start Routine "dummy_resources" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('dummy_resources.started', globalClock.getTime())
        sound_14.setSound('audio/F-a.wav', secs=1.0, hamming=True)
        sound_14.setVolume(1, log=False)
        sound_14.seek(0)
        sound_15.setSound('audio/F-b.wav', secs=1.0, hamming=True)
        sound_15.setVolume(1, log=False)
        sound_15.seek(0)
        sound_16.setSound('audio/F-c.wav', secs=1.0, hamming=True)
        sound_16.setVolume(1, log=False)
        sound_16.seek(0)
        sound_17.setSound('audio/F-d.wav', secs=1.0, hamming=True)
        sound_17.setVolume(1, log=False)
        sound_17.seek(0)
        sound_18.setSound('audio/F-e.wav', secs=1.0, hamming=True)
        sound_18.setVolume(1, log=False)
        sound_18.seek(0)
        sound_23.setSound('audio/F-g.wav', secs=1.0, hamming=True)
        sound_23.setVolume(1, log=False)
        sound_23.seek(0)
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
        frameN = -1
        
        # --- Run Routine "dummy_resources" ---
        routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 1.0:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # if sound_14 is starting this frame...
            if sound_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sound_14.frameNStart = frameN  # exact frame index
                sound_14.tStart = t  # local t and not account for scr refresh
                sound_14.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('sound_14.started', tThisFlipGlobal)
                # update status
                sound_14.status = STARTED
                sound_14.play(when=win)  # sync with win flip
            
            # if sound_14 is stopping this frame...
            if sound_14.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > sound_14.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    sound_14.tStop = t  # not accounting for scr refresh
                    sound_14.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'sound_14.stopped')
                    # update status
                    sound_14.status = FINISHED
                    sound_14.stop()
            # update sound_14 status according to whether it's playing
            if sound_14.isPlaying:
                sound_14.status = STARTED
            elif sound_14.isFinished:
                sound_14.status = FINISHED
            
            # if sound_15 is starting this frame...
            if sound_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sound_15.frameNStart = frameN  # exact frame index
                sound_15.tStart = t  # local t and not account for scr refresh
                sound_15.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('sound_15.started', tThisFlipGlobal)
                # update status
                sound_15.status = STARTED
                sound_15.play(when=win)  # sync with win flip
            
            # if sound_15 is stopping this frame...
            if sound_15.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > sound_15.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    sound_15.tStop = t  # not accounting for scr refresh
                    sound_15.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'sound_15.stopped')
                    # update status
                    sound_15.status = FINISHED
                    sound_15.stop()
            # update sound_15 status according to whether it's playing
            if sound_15.isPlaying:
                sound_15.status = STARTED
            elif sound_15.isFinished:
                sound_15.status = FINISHED
            
            # if sound_16 is starting this frame...
            if sound_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sound_16.frameNStart = frameN  # exact frame index
                sound_16.tStart = t  # local t and not account for scr refresh
                sound_16.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('sound_16.started', tThisFlipGlobal)
                # update status
                sound_16.status = STARTED
                sound_16.play(when=win)  # sync with win flip
            
            # if sound_16 is stopping this frame...
            if sound_16.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > sound_16.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    sound_16.tStop = t  # not accounting for scr refresh
                    sound_16.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'sound_16.stopped')
                    # update status
                    sound_16.status = FINISHED
                    sound_16.stop()
            # update sound_16 status according to whether it's playing
            if sound_16.isPlaying:
                sound_16.status = STARTED
            elif sound_16.isFinished:
                sound_16.status = FINISHED
            
            # if sound_17 is starting this frame...
            if sound_17.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sound_17.frameNStart = frameN  # exact frame index
                sound_17.tStart = t  # local t and not account for scr refresh
                sound_17.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('sound_17.started', tThisFlipGlobal)
                # update status
                sound_17.status = STARTED
                sound_17.play(when=win)  # sync with win flip
            
            # if sound_17 is stopping this frame...
            if sound_17.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > sound_17.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    sound_17.tStop = t  # not accounting for scr refresh
                    sound_17.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'sound_17.stopped')
                    # update status
                    sound_17.status = FINISHED
                    sound_17.stop()
            # update sound_17 status according to whether it's playing
            if sound_17.isPlaying:
                sound_17.status = STARTED
            elif sound_17.isFinished:
                sound_17.status = FINISHED
            
            # if sound_18 is starting this frame...
            if sound_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sound_18.frameNStart = frameN  # exact frame index
                sound_18.tStart = t  # local t and not account for scr refresh
                sound_18.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('sound_18.started', tThisFlipGlobal)
                # update status
                sound_18.status = STARTED
                sound_18.play(when=win)  # sync with win flip
            
            # if sound_18 is stopping this frame...
            if sound_18.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > sound_18.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    sound_18.tStop = t  # not accounting for scr refresh
                    sound_18.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'sound_18.stopped')
                    # update status
                    sound_18.status = FINISHED
                    sound_18.stop()
            # update sound_18 status according to whether it's playing
            if sound_18.isPlaying:
                sound_18.status = STARTED
            elif sound_18.isFinished:
                sound_18.status = FINISHED
            
            # *image_47* updates
            
            # if image_47 is starting this frame...
            if image_47.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_47.frameNStart = frameN  # exact frame index
                image_47.tStart = t  # local t and not account for scr refresh
                image_47.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_47, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_47.started')
                # update status
                image_47.status = STARTED
                image_47.setAutoDraw(True)
            
            # if image_47 is active this frame...
            if image_47.status == STARTED:
                # update params
                pass
            
            # if image_47 is stopping this frame...
            if image_47.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_47.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    image_47.tStop = t  # not accounting for scr refresh
                    image_47.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_47.stopped')
                    # update status
                    image_47.status = FINISHED
                    image_47.setAutoDraw(False)
            
            # *image_48* updates
            
            # if image_48 is starting this frame...
            if image_48.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_48.frameNStart = frameN  # exact frame index
                image_48.tStart = t  # local t and not account for scr refresh
                image_48.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_48, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_48.started')
                # update status
                image_48.status = STARTED
                image_48.setAutoDraw(True)
            
            # if image_48 is active this frame...
            if image_48.status == STARTED:
                # update params
                pass
            
            # if image_48 is stopping this frame...
            if image_48.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_48.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    image_48.tStop = t  # not accounting for scr refresh
                    image_48.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_48.stopped')
                    # update status
                    image_48.status = FINISHED
                    image_48.setAutoDraw(False)
            
            # if sound_23 is starting this frame...
            if sound_23.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sound_23.frameNStart = frameN  # exact frame index
                sound_23.tStart = t  # local t and not account for scr refresh
                sound_23.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('sound_23.started', tThisFlipGlobal)
                # update status
                sound_23.status = STARTED
                sound_23.play(when=win)  # sync with win flip
            
            # if sound_23 is stopping this frame...
            if sound_23.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > sound_23.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    sound_23.tStop = t  # not accounting for scr refresh
                    sound_23.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'sound_23.stopped')
                    # update status
                    sound_23.status = FINISHED
                    sound_23.stop()
            # update sound_23 status according to whether it's playing
            if sound_23.isPlaying:
                sound_23.status = STARTED
            elif sound_23.isFinished:
                sound_23.status = FINISHED
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in dummy_resourcesComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "dummy_resources" ---
        for thisComponent in dummy_resourcesComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('dummy_resources.stopped', globalClock.getTime())
        sound_14.pause()  # ensure sound has stopped at end of Routine
        sound_15.pause()  # ensure sound has stopped at end of Routine
        sound_16.pause()  # ensure sound has stopped at end of Routine
        sound_17.pause()  # ensure sound has stopped at end of Routine
        sound_18.pause()  # ensure sound has stopped at end of Routine
        sound_23.pause()  # ensure sound has stopped at end of Routine
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-1.000000)
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 0 repeats of 'dummy_trial'
    
    
    # --- Prepare to start Routine "JS_code" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('JS_code.started', globalClock.getTime())
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
    frameN = -1
    
    # --- Run Routine "JS_code" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in JS_codeComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "JS_code" ---
    for thisComponent in JS_codeComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('JS_code.stopped', globalClock.getTime())
    # the Routine "JS_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "instruction_1" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('instruction_1.started', globalClock.getTime())
    wecomle_resp.keys = []
    wecomle_resp.rt = []
    _wecomle_resp_allKeys = []
    sound_1.setSound('audio/F1.wav', secs=30, hamming=True)
    sound_1.setVolume(1, log=False)
    sound_1.seek(0)
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
    frameN = -1
    
    # --- Run Routine "instruction_1" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_homebase* updates
        
        # if text_homebase is starting this frame...
        if text_homebase.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_homebase.frameNStart = frameN  # exact frame index
            text_homebase.tStart = t  # local t and not account for scr refresh
            text_homebase.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_homebase, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_homebase.status = STARTED
            text_homebase.setAutoDraw(True)
        
        # if text_homebase is active this frame...
        if text_homebase.status == STARTED:
            # update params
            pass
        
        # *wecomle_resp* updates
        waitOnFlip = False
        
        # if wecomle_resp is starting this frame...
        if wecomle_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            wecomle_resp.frameNStart = frameN  # exact frame index
            wecomle_resp.tStart = t  # local t and not account for scr refresh
            wecomle_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(wecomle_resp, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'wecomle_resp.started')
            # update status
            wecomle_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(wecomle_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(wecomle_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if wecomle_resp.status == STARTED and not waitOnFlip:
            theseKeys = wecomle_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _wecomle_resp_allKeys.extend(theseKeys)
            if len(_wecomle_resp_allKeys):
                wecomle_resp.keys = _wecomle_resp_allKeys[-1].name  # just the last key pressed
                wecomle_resp.rt = _wecomle_resp_allKeys[-1].rt
                wecomle_resp.duration = _wecomle_resp_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # if sound_1 is starting this frame...
        if sound_1.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_1.frameNStart = frameN  # exact frame index
            sound_1.tStart = t  # local t and not account for scr refresh
            sound_1.tStartRefresh = tThisFlipGlobal  # on global time
            # update status
            sound_1.status = STARTED
            sound_1.play()  # start the sound (it finishes automatically)
        
        # if sound_1 is stopping this frame...
        if sound_1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_1.tStartRefresh + 30-frameTolerance:
                # keep track of stop time/frame for later
                sound_1.tStop = t  # not accounting for scr refresh
                sound_1.frameNStop = frameN  # exact frame index
                # update status
                sound_1.status = FINISHED
                sound_1.stop()
        # update sound_1 status according to whether it's playing
        if sound_1.isPlaying:
            sound_1.status = STARTED
        elif sound_1.isFinished:
            sound_1.status = FINISHED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instruction_1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instruction_1" ---
    for thisComponent in instruction_1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('instruction_1.stopped', globalClock.getTime())
    sound_1.pause()  # ensure sound has stopped at end of Routine
    # the Routine "instruction_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "instruction_2" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('instruction_2.started', globalClock.getTime())
    sound_2.setSound('audio/F3.wav', secs=30, hamming=True)
    sound_2.setVolume(1, log=False)
    sound_2.seek(0)
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
    frameN = -1
    
    # --- Run Routine "instruction_2" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        
        # if text is starting this frame...
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text.started')
            # update status
            text.status = STARTED
            text.setAutoDraw(True)
        
        # if text is active this frame...
        if text.status == STARTED:
            # update params
            pass
        
        # *image_8* updates
        
        # if image_8 is starting this frame...
        if image_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_8.frameNStart = frameN  # exact frame index
            image_8.tStart = t  # local t and not account for scr refresh
            image_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_8.started')
            # update status
            image_8.status = STARTED
            image_8.setAutoDraw(True)
        
        # if image_8 is active this frame...
        if image_8.status == STARTED:
            # update params
            pass
        
        # *image_9* updates
        
        # if image_9 is starting this frame...
        if image_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_9.frameNStart = frameN  # exact frame index
            image_9.tStart = t  # local t and not account for scr refresh
            image_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_9.started')
            # update status
            image_9.status = STARTED
            image_9.setAutoDraw(True)
        
        # if image_9 is active this frame...
        if image_9.status == STARTED:
            # update params
            pass
        
        # *image_10* updates
        
        # if image_10 is starting this frame...
        if image_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_10.frameNStart = frameN  # exact frame index
            image_10.tStart = t  # local t and not account for scr refresh
            image_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_10.started')
            # update status
            image_10.status = STARTED
            image_10.setAutoDraw(True)
        
        # if image_10 is active this frame...
        if image_10.status == STARTED:
            # update params
            pass
        
        # if sound_2 is starting this frame...
        if sound_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_2.frameNStart = frameN  # exact frame index
            sound_2.tStart = t  # local t and not account for scr refresh
            sound_2.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_2.started', tThisFlipGlobal)
            # update status
            sound_2.status = STARTED
            sound_2.play(when=win)  # sync with win flip
        
        # if sound_2 is stopping this frame...
        if sound_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_2.tStartRefresh + 30-frameTolerance:
                # keep track of stop time/frame for later
                sound_2.tStop = t  # not accounting for scr refresh
                sound_2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_2.stopped')
                # update status
                sound_2.status = FINISHED
                sound_2.stop()
        # update sound_2 status according to whether it's playing
        if sound_2.isPlaying:
            sound_2.status = STARTED
        elif sound_2.isFinished:
            sound_2.status = FINISHED
        
        # *key_resp_10* updates
        waitOnFlip = False
        
        # if key_resp_10 is starting this frame...
        if key_resp_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_10.frameNStart = frameN  # exact frame index
            key_resp_10.tStart = t  # local t and not account for scr refresh
            key_resp_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_10, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_10.started')
            # update status
            key_resp_10.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_10.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_10.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_10.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_10.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_10_allKeys.extend(theseKeys)
            if len(_key_resp_10_allKeys):
                key_resp_10.keys = _key_resp_10_allKeys[-1].name  # just the last key pressed
                key_resp_10.rt = _key_resp_10_allKeys[-1].rt
                key_resp_10.duration = _key_resp_10_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instruction_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instruction_2" ---
    for thisComponent in instruction_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('instruction_2.stopped', globalClock.getTime())
    sound_2.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_10.keys in ['', [], None]:  # No response was made
        key_resp_10.keys = None
    thisExp.addData('key_resp_10.keys',key_resp_10.keys)
    if key_resp_10.keys != None:  # we had a response
        thisExp.addData('key_resp_10.rt', key_resp_10.rt)
        thisExp.addData('key_resp_10.duration', key_resp_10.duration)
    thisExp.nextEntry()
    # the Routine "instruction_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "instruction_2_1" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('instruction_2_1.started', globalClock.getTime())
    sound_3.setSound('audio/F6.wav', secs=20, hamming=True)
    sound_3.setVolume(1, log=False)
    sound_3.seek(0)
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
    frameN = -1
    
    # --- Run Routine "instruction_2_1" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_11* updates
        
        # if image_11 is starting this frame...
        if image_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_11.frameNStart = frameN  # exact frame index
            image_11.tStart = t  # local t and not account for scr refresh
            image_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_11.started')
            # update status
            image_11.status = STARTED
            image_11.setAutoDraw(True)
        
        # if image_11 is active this frame...
        if image_11.status == STARTED:
            # update params
            pass
        
        # *image_12* updates
        
        # if image_12 is starting this frame...
        if image_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_12.frameNStart = frameN  # exact frame index
            image_12.tStart = t  # local t and not account for scr refresh
            image_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_12.started')
            # update status
            image_12.status = STARTED
            image_12.setAutoDraw(True)
        
        # if image_12 is active this frame...
        if image_12.status == STARTED:
            # update params
            pass
        
        # if image_12 is stopping this frame...
        if image_12.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_12.tStartRefresh + 2-frameTolerance:
                # keep track of stop time/frame for later
                image_12.tStop = t  # not accounting for scr refresh
                image_12.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_12.stopped')
                # update status
                image_12.status = FINISHED
                image_12.setAutoDraw(False)
        
        # *image_13* updates
        
        # if image_13 is starting this frame...
        if image_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_13.frameNStart = frameN  # exact frame index
            image_13.tStart = t  # local t and not account for scr refresh
            image_13.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_13, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_13.started')
            # update status
            image_13.status = STARTED
            image_13.setAutoDraw(True)
        
        # if image_13 is active this frame...
        if image_13.status == STARTED:
            # update params
            pass
        
        # *text_5* updates
        
        # if text_5 is starting this frame...
        if text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_5.frameNStart = frameN  # exact frame index
            text_5.tStart = t  # local t and not account for scr refresh
            text_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_5.started')
            # update status
            text_5.status = STARTED
            text_5.setAutoDraw(True)
        
        # if text_5 is active this frame...
        if text_5.status == STARTED:
            # update params
            pass
        
        # if sound_3 is starting this frame...
        if sound_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_3.frameNStart = frameN  # exact frame index
            sound_3.tStart = t  # local t and not account for scr refresh
            sound_3.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_3.started', tThisFlipGlobal)
            # update status
            sound_3.status = STARTED
            sound_3.play(when=win)  # sync with win flip
        
        # if sound_3 is stopping this frame...
        if sound_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_3.tStartRefresh + 20-frameTolerance:
                # keep track of stop time/frame for later
                sound_3.tStop = t  # not accounting for scr refresh
                sound_3.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_3.stopped')
                # update status
                sound_3.status = FINISHED
                sound_3.stop()
        # update sound_3 status according to whether it's playing
        if sound_3.isPlaying:
            sound_3.status = STARTED
        elif sound_3.isFinished:
            sound_3.status = FINISHED
        
        # *image_24* updates
        
        # if image_24 is starting this frame...
        if image_24.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
            # keep track of start time/frame for later
            image_24.frameNStart = frameN  # exact frame index
            image_24.tStart = t  # local t and not account for scr refresh
            image_24.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_24, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_24.started')
            # update status
            image_24.status = STARTED
            image_24.setAutoDraw(True)
        
        # if image_24 is active this frame...
        if image_24.status == STARTED:
            # update params
            image_24.setOpacity(sin(t*10), log=False)
        
        # *key_resp_5* updates
        waitOnFlip = False
        
        # if key_resp_5 is starting this frame...
        if key_resp_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_5.frameNStart = frameN  # exact frame index
            key_resp_5.tStart = t  # local t and not account for scr refresh
            key_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_5.started')
            # update status
            key_resp_5.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_5.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_5.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_5.getKeys(keyList=['z'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_5_allKeys.extend(theseKeys)
            if len(_key_resp_5_allKeys):
                key_resp_5.keys = _key_resp_5_allKeys[-1].name  # just the last key pressed
                key_resp_5.rt = _key_resp_5_allKeys[-1].rt
                key_resp_5.duration = _key_resp_5_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instruction_2_1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instruction_2_1" ---
    for thisComponent in instruction_2_1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('instruction_2_1.stopped', globalClock.getTime())
    sound_3.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_5.keys in ['', [], None]:  # No response was made
        key_resp_5.keys = None
    thisExp.addData('key_resp_5.keys',key_resp_5.keys)
    if key_resp_5.keys != None:  # we had a response
        thisExp.addData('key_resp_5.rt', key_resp_5.rt)
        thisExp.addData('key_resp_5.duration', key_resp_5.duration)
    thisExp.nextEntry()
    # the Routine "instruction_2_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "instruction_2_2" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('instruction_2_2.started', globalClock.getTime())
    sound_4.setSound('audio/F7.wav', secs=20, hamming=True)
    sound_4.setVolume(1, log=False)
    sound_4.seek(0)
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
    frameN = -1
    
    # --- Run Routine "instruction_2_2" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_14* updates
        
        # if image_14 is starting this frame...
        if image_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_14.frameNStart = frameN  # exact frame index
            image_14.tStart = t  # local t and not account for scr refresh
            image_14.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_14, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_14.started')
            # update status
            image_14.status = STARTED
            image_14.setAutoDraw(True)
        
        # if image_14 is active this frame...
        if image_14.status == STARTED:
            # update params
            pass
        
        # *image_15* updates
        
        # if image_15 is starting this frame...
        if image_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_15.frameNStart = frameN  # exact frame index
            image_15.tStart = t  # local t and not account for scr refresh
            image_15.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_15, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_15.started')
            # update status
            image_15.status = STARTED
            image_15.setAutoDraw(True)
        
        # if image_15 is active this frame...
        if image_15.status == STARTED:
            # update params
            pass
        
        # *image_16* updates
        
        # if image_16 is starting this frame...
        if image_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_16.frameNStart = frameN  # exact frame index
            image_16.tStart = t  # local t and not account for scr refresh
            image_16.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_16, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_16.started')
            # update status
            image_16.status = STARTED
            image_16.setAutoDraw(True)
        
        # if image_16 is active this frame...
        if image_16.status == STARTED:
            # update params
            pass
        
        # if image_16 is stopping this frame...
        if image_16.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_16.tStartRefresh + 2-frameTolerance:
                # keep track of stop time/frame for later
                image_16.tStop = t  # not accounting for scr refresh
                image_16.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_16.stopped')
                # update status
                image_16.status = FINISHED
                image_16.setAutoDraw(False)
        
        # *text_6* updates
        
        # if text_6 is starting this frame...
        if text_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_6.frameNStart = frameN  # exact frame index
            text_6.tStart = t  # local t and not account for scr refresh
            text_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_6.started')
            # update status
            text_6.status = STARTED
            text_6.setAutoDraw(True)
        
        # if text_6 is active this frame...
        if text_6.status == STARTED:
            # update params
            pass
        
        # if sound_4 is starting this frame...
        if sound_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_4.frameNStart = frameN  # exact frame index
            sound_4.tStart = t  # local t and not account for scr refresh
            sound_4.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_4.started', tThisFlipGlobal)
            # update status
            sound_4.status = STARTED
            sound_4.play(when=win)  # sync with win flip
        
        # if sound_4 is stopping this frame...
        if sound_4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_4.tStartRefresh + 20-frameTolerance:
                # keep track of stop time/frame for later
                sound_4.tStop = t  # not accounting for scr refresh
                sound_4.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_4.stopped')
                # update status
                sound_4.status = FINISHED
                sound_4.stop()
        # update sound_4 status according to whether it's playing
        if sound_4.isPlaying:
            sound_4.status = STARTED
        elif sound_4.isFinished:
            sound_4.status = FINISHED
        
        # *image_25* updates
        
        # if image_25 is starting this frame...
        if image_25.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
            # keep track of start time/frame for later
            image_25.frameNStart = frameN  # exact frame index
            image_25.tStart = t  # local t and not account for scr refresh
            image_25.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_25, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_25.started')
            # update status
            image_25.status = STARTED
            image_25.setAutoDraw(True)
        
        # if image_25 is active this frame...
        if image_25.status == STARTED:
            # update params
            image_25.setOpacity(sin(t*10), log=False)
        
        # *key_resp_6* updates
        waitOnFlip = False
        
        # if key_resp_6 is starting this frame...
        if key_resp_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_6.frameNStart = frameN  # exact frame index
            key_resp_6.tStart = t  # local t and not account for scr refresh
            key_resp_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_6.started')
            # update status
            key_resp_6.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_6.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_6.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_6.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_6.getKeys(keyList=['m'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_6_allKeys.extend(theseKeys)
            if len(_key_resp_6_allKeys):
                key_resp_6.keys = _key_resp_6_allKeys[-1].name  # just the last key pressed
                key_resp_6.rt = _key_resp_6_allKeys[-1].rt
                key_resp_6.duration = _key_resp_6_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instruction_2_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instruction_2_2" ---
    for thisComponent in instruction_2_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('instruction_2_2.stopped', globalClock.getTime())
    sound_4.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_6.keys in ['', [], None]:  # No response was made
        key_resp_6.keys = None
    thisExp.addData('key_resp_6.keys',key_resp_6.keys)
    if key_resp_6.keys != None:  # we had a response
        thisExp.addData('key_resp_6.rt', key_resp_6.rt)
        thisExp.addData('key_resp_6.duration', key_resp_6.duration)
    thisExp.nextEntry()
    # the Routine "instruction_2_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "instruction_2_3" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('instruction_2_3.started', globalClock.getTime())
    sound_5.setSound('audio/F8.wav', secs=30, hamming=True)
    sound_5.setVolume(1, log=False)
    sound_5.seek(0)
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
    frameN = -1
    
    # --- Run Routine "instruction_2_3" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_17* updates
        
        # if image_17 is starting this frame...
        if image_17.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_17.frameNStart = frameN  # exact frame index
            image_17.tStart = t  # local t and not account for scr refresh
            image_17.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_17, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_17.started')
            # update status
            image_17.status = STARTED
            image_17.setAutoDraw(True)
        
        # if image_17 is active this frame...
        if image_17.status == STARTED:
            # update params
            pass
        
        # *image_18* updates
        
        # if image_18 is starting this frame...
        if image_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_18.frameNStart = frameN  # exact frame index
            image_18.tStart = t  # local t and not account for scr refresh
            image_18.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_18, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_18.started')
            # update status
            image_18.status = STARTED
            image_18.setAutoDraw(True)
        
        # if image_18 is active this frame...
        if image_18.status == STARTED:
            # update params
            pass
        
        # *image_19* updates
        
        # if image_19 is starting this frame...
        if image_19.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_19.frameNStart = frameN  # exact frame index
            image_19.tStart = t  # local t and not account for scr refresh
            image_19.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_19, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_19.started')
            # update status
            image_19.status = STARTED
            image_19.setAutoDraw(True)
        
        # if image_19 is active this frame...
        if image_19.status == STARTED:
            # update params
            pass
        
        # if image_19 is stopping this frame...
        if image_19.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_19.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                image_19.tStop = t  # not accounting for scr refresh
                image_19.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_19.stopped')
                # update status
                image_19.status = FINISHED
                image_19.setAutoDraw(False)
        
        # *text_7* updates
        
        # if text_7 is starting this frame...
        if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_7.frameNStart = frameN  # exact frame index
            text_7.tStart = t  # local t and not account for scr refresh
            text_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_7.started')
            # update status
            text_7.status = STARTED
            text_7.setAutoDraw(True)
        
        # if text_7 is active this frame...
        if text_7.status == STARTED:
            # update params
            pass
        
        # if sound_5 is starting this frame...
        if sound_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_5.frameNStart = frameN  # exact frame index
            sound_5.tStart = t  # local t and not account for scr refresh
            sound_5.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_5.started', tThisFlipGlobal)
            # update status
            sound_5.status = STARTED
            sound_5.play(when=win)  # sync with win flip
        
        # if sound_5 is stopping this frame...
        if sound_5.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_5.tStartRefresh + 30-frameTolerance:
                # keep track of stop time/frame for later
                sound_5.tStop = t  # not accounting for scr refresh
                sound_5.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_5.stopped')
                # update status
                sound_5.status = FINISHED
                sound_5.stop()
        # update sound_5 status according to whether it's playing
        if sound_5.isPlaying:
            sound_5.status = STARTED
        elif sound_5.isFinished:
            sound_5.status = FINISHED
        
        # *image_23* updates
        
        # if image_23 is starting this frame...
        if image_23.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
            # keep track of start time/frame for later
            image_23.frameNStart = frameN  # exact frame index
            image_23.tStart = t  # local t and not account for scr refresh
            image_23.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_23, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_23.started')
            # update status
            image_23.status = STARTED
            image_23.setAutoDraw(True)
        
        # if image_23 is active this frame...
        if image_23.status == STARTED:
            # update params
            image_23.setOpacity(sin(t*10), log=False)
        
        # *key_resp_7* updates
        waitOnFlip = False
        
        # if key_resp_7 is starting this frame...
        if key_resp_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_7.frameNStart = frameN  # exact frame index
            key_resp_7.tStart = t  # local t and not account for scr refresh
            key_resp_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_7.started')
            # update status
            key_resp_7.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_7.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_7.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_7.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_7.getKeys(keyList=['m'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_7_allKeys.extend(theseKeys)
            if len(_key_resp_7_allKeys):
                key_resp_7.keys = _key_resp_7_allKeys[-1].name  # just the last key pressed
                key_resp_7.rt = _key_resp_7_allKeys[-1].rt
                key_resp_7.duration = _key_resp_7_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instruction_2_3Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instruction_2_3" ---
    for thisComponent in instruction_2_3Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('instruction_2_3.stopped', globalClock.getTime())
    sound_5.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_7.keys in ['', [], None]:  # No response was made
        key_resp_7.keys = None
    thisExp.addData('key_resp_7.keys',key_resp_7.keys)
    if key_resp_7.keys != None:  # we had a response
        thisExp.addData('key_resp_7.rt', key_resp_7.rt)
        thisExp.addData('key_resp_7.duration', key_resp_7.duration)
    thisExp.nextEntry()
    # the Routine "instruction_2_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "instruction_2_4" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('instruction_2_4.started', globalClock.getTime())
    sound_6.setSound('audio/F9.wav', secs=30, hamming=True)
    sound_6.setVolume(1, log=False)
    sound_6.seek(0)
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
    frameN = -1
    
    # --- Run Routine "instruction_2_4" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_20* updates
        
        # if image_20 is starting this frame...
        if image_20.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_20.frameNStart = frameN  # exact frame index
            image_20.tStart = t  # local t and not account for scr refresh
            image_20.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_20, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_20.started')
            # update status
            image_20.status = STARTED
            image_20.setAutoDraw(True)
        
        # if image_20 is active this frame...
        if image_20.status == STARTED:
            # update params
            pass
        
        # *image_21* updates
        
        # if image_21 is starting this frame...
        if image_21.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_21.frameNStart = frameN  # exact frame index
            image_21.tStart = t  # local t and not account for scr refresh
            image_21.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_21, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_21.started')
            # update status
            image_21.status = STARTED
            image_21.setAutoDraw(True)
        
        # if image_21 is active this frame...
        if image_21.status == STARTED:
            # update params
            pass
        
        # if image_21 is stopping this frame...
        if image_21.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_21.tStartRefresh + 5-frameTolerance:
                # keep track of stop time/frame for later
                image_21.tStop = t  # not accounting for scr refresh
                image_21.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_21.stopped')
                # update status
                image_21.status = FINISHED
                image_21.setAutoDraw(False)
        
        # *image_22* updates
        
        # if image_22 is starting this frame...
        if image_22.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_22.frameNStart = frameN  # exact frame index
            image_22.tStart = t  # local t and not account for scr refresh
            image_22.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_22, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_22.started')
            # update status
            image_22.status = STARTED
            image_22.setAutoDraw(True)
        
        # if image_22 is active this frame...
        if image_22.status == STARTED:
            # update params
            pass
        
        # *text_8* updates
        
        # if text_8 is starting this frame...
        if text_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_8.frameNStart = frameN  # exact frame index
            text_8.tStart = t  # local t and not account for scr refresh
            text_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_8.started')
            # update status
            text_8.status = STARTED
            text_8.setAutoDraw(True)
        
        # if text_8 is active this frame...
        if text_8.status == STARTED:
            # update params
            pass
        
        # if sound_6 is starting this frame...
        if sound_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_6.frameNStart = frameN  # exact frame index
            sound_6.tStart = t  # local t and not account for scr refresh
            sound_6.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_6.started', tThisFlipGlobal)
            # update status
            sound_6.status = STARTED
            sound_6.play(when=win)  # sync with win flip
        
        # if sound_6 is stopping this frame...
        if sound_6.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_6.tStartRefresh + 30-frameTolerance:
                # keep track of stop time/frame for later
                sound_6.tStop = t  # not accounting for scr refresh
                sound_6.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_6.stopped')
                # update status
                sound_6.status = FINISHED
                sound_6.stop()
        # update sound_6 status according to whether it's playing
        if sound_6.isPlaying:
            sound_6.status = STARTED
        elif sound_6.isFinished:
            sound_6.status = FINISHED
        
        # *image_26* updates
        
        # if image_26 is starting this frame...
        if image_26.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
            # keep track of start time/frame for later
            image_26.frameNStart = frameN  # exact frame index
            image_26.tStart = t  # local t and not account for scr refresh
            image_26.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_26, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_26.started')
            # update status
            image_26.status = STARTED
            image_26.setAutoDraw(True)
        
        # if image_26 is active this frame...
        if image_26.status == STARTED:
            # update params
            image_26.setOpacity(sin(t*10), log=False)
        
        # *key_resp_8* updates
        waitOnFlip = False
        
        # if key_resp_8 is starting this frame...
        if key_resp_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_8.frameNStart = frameN  # exact frame index
            key_resp_8.tStart = t  # local t and not account for scr refresh
            key_resp_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_8.started')
            # update status
            key_resp_8.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_8.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_8.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_8.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_8.getKeys(keyList=['z'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_8_allKeys.extend(theseKeys)
            if len(_key_resp_8_allKeys):
                key_resp_8.keys = _key_resp_8_allKeys[-1].name  # just the last key pressed
                key_resp_8.rt = _key_resp_8_allKeys[-1].rt
                key_resp_8.duration = _key_resp_8_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instruction_2_4Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instruction_2_4" ---
    for thisComponent in instruction_2_4Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('instruction_2_4.stopped', globalClock.getTime())
    sound_6.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_8.keys in ['', [], None]:  # No response was made
        key_resp_8.keys = None
    thisExp.addData('key_resp_8.keys',key_resp_8.keys)
    if key_resp_8.keys != None:  # we had a response
        thisExp.addData('key_resp_8.rt', key_resp_8.rt)
        thisExp.addData('key_resp_8.duration', key_resp_8.duration)
    thisExp.nextEntry()
    # the Routine "instruction_2_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "instruction_2_5" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('instruction_2_5.started', globalClock.getTime())
    sound_7.setSound('audio/F10.wav', secs=30, hamming=True)
    sound_7.setVolume(1, log=False)
    sound_7.seek(0)
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
    frameN = -1
    
    # --- Run Routine "instruction_2_5" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_27* updates
        
        # if image_27 is starting this frame...
        if image_27.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_27.frameNStart = frameN  # exact frame index
            image_27.tStart = t  # local t and not account for scr refresh
            image_27.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_27, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_27.started')
            # update status
            image_27.status = STARTED
            image_27.setAutoDraw(True)
        
        # if image_27 is active this frame...
        if image_27.status == STARTED:
            # update params
            pass
        
        # *image_29* updates
        
        # if image_29 is starting this frame...
        if image_29.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_29.frameNStart = frameN  # exact frame index
            image_29.tStart = t  # local t and not account for scr refresh
            image_29.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_29, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_29.started')
            # update status
            image_29.status = STARTED
            image_29.setAutoDraw(True)
        
        # if image_29 is active this frame...
        if image_29.status == STARTED:
            # update params
            pass
        
        # *text_9* updates
        
        # if text_9 is starting this frame...
        if text_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_9.frameNStart = frameN  # exact frame index
            text_9.tStart = t  # local t and not account for scr refresh
            text_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_9.started')
            # update status
            text_9.status = STARTED
            text_9.setAutoDraw(True)
        
        # if text_9 is active this frame...
        if text_9.status == STARTED:
            # update params
            pass
        
        # if sound_7 is starting this frame...
        if sound_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_7.frameNStart = frameN  # exact frame index
            sound_7.tStart = t  # local t and not account for scr refresh
            sound_7.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('sound_7.started', tThisFlipGlobal)
            # update status
            sound_7.status = STARTED
            sound_7.play(when=win)  # sync with win flip
        
        # if sound_7 is stopping this frame...
        if sound_7.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_7.tStartRefresh + 30-frameTolerance:
                # keep track of stop time/frame for later
                sound_7.tStop = t  # not accounting for scr refresh
                sound_7.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'sound_7.stopped')
                # update status
                sound_7.status = FINISHED
                sound_7.stop()
        # update sound_7 status according to whether it's playing
        if sound_7.isPlaying:
            sound_7.status = STARTED
        elif sound_7.isFinished:
            sound_7.status = FINISHED
        
        # *image_30* updates
        
        # if image_30 is starting this frame...
        if image_30.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            image_30.frameNStart = frameN  # exact frame index
            image_30.tStart = t  # local t and not account for scr refresh
            image_30.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_30, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_30.started')
            # update status
            image_30.status = STARTED
            image_30.setAutoDraw(True)
        
        # if image_30 is active this frame...
        if image_30.status == STARTED:
            # update params
            pass
        
        # *key_resp_11* updates
        waitOnFlip = False
        
        # if key_resp_11 is starting this frame...
        if key_resp_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_11.frameNStart = frameN  # exact frame index
            key_resp_11.tStart = t  # local t and not account for scr refresh
            key_resp_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_11.started')
            # update status
            key_resp_11.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_11.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_11.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_11.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_11.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_11_allKeys.extend(theseKeys)
            if len(_key_resp_11_allKeys):
                key_resp_11.keys = _key_resp_11_allKeys[-1].name  # just the last key pressed
                key_resp_11.rt = _key_resp_11_allKeys[-1].rt
                key_resp_11.duration = _key_resp_11_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instruction_2_5Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instruction_2_5" ---
    for thisComponent in instruction_2_5Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('instruction_2_5.stopped', globalClock.getTime())
    sound_7.pause()  # ensure sound has stopped at end of Routine
    # check responses
    if key_resp_11.keys in ['', [], None]:  # No response was made
        key_resp_11.keys = None
    thisExp.addData('key_resp_11.keys',key_resp_11.keys)
    if key_resp_11.keys != None:  # we had a response
        thisExp.addData('key_resp_11.rt', key_resp_11.rt)
        thisExp.addData('key_resp_11.duration', key_resp_11.duration)
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
            globals()[paramName] = thisBlock[paramName]
    
    for thisBlock in block:
        currentLoop = block
        thisExp.timestampOnFlip(win, 'thisRow.t')
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                inputs=inputs, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
        if thisBlock != None:
            for paramName in thisBlock:
                globals()[paramName] = thisBlock[paramName]
        
        # --- Prepare to start Routine "Instructions_3" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('Instructions_3.started', globalClock.getTime())
        key_resp_16.keys = []
        key_resp_16.rt = []
        _key_resp_16_allKeys = []
        sound_24.setSound('audio/F11.wav', secs=40, hamming=True)
        sound_24.setVolume(1, log=False)
        sound_24.seek(0)
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
        frameN = -1
        
        # --- Run Routine "Instructions_3" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_49* updates
            
            # if image_49 is starting this frame...
            if image_49.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_49.frameNStart = frameN  # exact frame index
                image_49.tStart = t  # local t and not account for scr refresh
                image_49.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_49, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_49.started')
                # update status
                image_49.status = STARTED
                image_49.setAutoDraw(True)
            
            # if image_49 is active this frame...
            if image_49.status == STARTED:
                # update params
                pass
            
            # *key_resp_16* updates
            waitOnFlip = False
            
            # if key_resp_16 is starting this frame...
            if key_resp_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_16.frameNStart = frameN  # exact frame index
                key_resp_16.tStart = t  # local t and not account for scr refresh
                key_resp_16.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_16, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_16.started')
                # update status
                key_resp_16.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_16.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_16.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_16.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_16.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_16_allKeys.extend(theseKeys)
                if len(_key_resp_16_allKeys):
                    key_resp_16.keys = _key_resp_16_allKeys[-1].name  # just the last key pressed
                    key_resp_16.rt = _key_resp_16_allKeys[-1].rt
                    key_resp_16.duration = _key_resp_16_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # if sound_24 is starting this frame...
            if sound_24.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sound_24.frameNStart = frameN  # exact frame index
                sound_24.tStart = t  # local t and not account for scr refresh
                sound_24.tStartRefresh = tThisFlipGlobal  # on global time
                # update status
                sound_24.status = STARTED
                sound_24.play(when=win)  # sync with win flip
            
            # if sound_24 is stopping this frame...
            if sound_24.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > sound_24.tStartRefresh + 40-frameTolerance:
                    # keep track of stop time/frame for later
                    sound_24.tStop = t  # not accounting for scr refresh
                    sound_24.frameNStop = frameN  # exact frame index
                    # update status
                    sound_24.status = FINISHED
                    sound_24.stop()
            # update sound_24 status according to whether it's playing
            if sound_24.isPlaying:
                sound_24.status = STARTED
            elif sound_24.isFinished:
                sound_24.status = FINISHED
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in Instructions_3Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "Instructions_3" ---
        for thisComponent in Instructions_3Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('Instructions_3.stopped', globalClock.getTime())
        # check responses
        if key_resp_16.keys in ['', [], None]:  # No response was made
            key_resp_16.keys = None
        block.addData('key_resp_16.keys',key_resp_16.keys)
        if key_resp_16.keys != None:  # we had a response
            block.addData('key_resp_16.rt', key_resp_16.rt)
            block.addData('key_resp_16.duration', key_resp_16.duration)
        sound_24.pause()  # ensure sound has stopped at end of Routine
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
                globals()[paramName] = thisTrial[paramName]
        
        for thisTrial in trials:
            currentLoop = trials
            thisExp.timestampOnFlip(win, 'thisRow.t')
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    inputs=inputs, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
            if thisTrial != None:
                for paramName in thisTrial:
                    globals()[paramName] = thisTrial[paramName]
            
            # --- Prepare to start Routine "inter_trial_interval" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('inter_trial_interval.started', globalClock.getTime())
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
            frameN = -1
            
            # --- Run Routine "inter_trial_interval" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 0.8:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_31* updates
                
                # if image_31 is starting this frame...
                if image_31.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_31.frameNStart = frameN  # exact frame index
                    image_31.tStart = t  # local t and not account for scr refresh
                    image_31.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_31, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    image_31.status = STARTED
                    image_31.setAutoDraw(True)
                
                # if image_31 is active this frame...
                if image_31.status == STARTED:
                    # update params
                    pass
                
                # if image_31 is stopping this frame...
                if image_31.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_31.tStartRefresh + 0.8-frameTolerance:
                        # keep track of stop time/frame for later
                        image_31.tStop = t  # not accounting for scr refresh
                        image_31.frameNStop = frameN  # exact frame index
                        # update status
                        image_31.status = FINISHED
                        image_31.setAutoDraw(False)
                
                # *image_32* updates
                
                # if image_32 is starting this frame...
                if image_32.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_32.frameNStart = frameN  # exact frame index
                    image_32.tStart = t  # local t and not account for scr refresh
                    image_32.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_32, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    image_32.status = STARTED
                    image_32.setAutoDraw(True)
                
                # if image_32 is active this frame...
                if image_32.status == STARTED:
                    # update params
                    pass
                
                # if image_32 is stopping this frame...
                if image_32.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_32.tStartRefresh + 0.8-frameTolerance:
                        # keep track of stop time/frame for later
                        image_32.tStop = t  # not accounting for scr refresh
                        image_32.frameNStop = frameN  # exact frame index
                        # update status
                        image_32.status = FINISHED
                        image_32.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, inputs=inputs, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in inter_trial_intervalComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "inter_trial_interval" ---
            for thisComponent in inter_trial_intervalComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('inter_trial_interval.stopped', globalClock.getTime())
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-0.800000)
            
            # --- Prepare to start Routine "ISIcode" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('ISIcode.started', globalClock.getTime())
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
            frameN = -1
            
            # --- Run Routine "ISIcode" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, inputs=inputs, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in ISIcodeComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "ISIcode" ---
            for thisComponent in ISIcodeComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('ISIcode.stopped', globalClock.getTime())
            # Run 'End Routine' code from code_10
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
            
            # --- Prepare to start Routine "fixation" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('fixation.started', globalClock.getTime())
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
            frameN = -1
            
            # --- Run Routine "fixation" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_35* updates
                
                # if image_35 is starting this frame...
                if image_35.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_35.frameNStart = frameN  # exact frame index
                    image_35.tStart = t  # local t and not account for scr refresh
                    image_35.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_35, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_35.started')
                    # update status
                    image_35.status = STARTED
                    image_35.setAutoDraw(True)
                
                # if image_35 is active this frame...
                if image_35.status == STARTED:
                    # update params
                    pass
                
                # if image_35 is stopping this frame...
                if image_35.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_35.tStartRefresh + thisISI-frameTolerance:
                        # keep track of stop time/frame for later
                        image_35.tStop = t  # not accounting for scr refresh
                        image_35.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_35.stopped')
                        # update status
                        image_35.status = FINISHED
                        image_35.setAutoDraw(False)
                
                # *image_33* updates
                
                # if image_33 is starting this frame...
                if image_33.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_33.frameNStart = frameN  # exact frame index
                    image_33.tStart = t  # local t and not account for scr refresh
                    image_33.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_33, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_33.started')
                    # update status
                    image_33.status = STARTED
                    image_33.setAutoDraw(True)
                
                # if image_33 is active this frame...
                if image_33.status == STARTED:
                    # update params
                    pass
                
                # if image_33 is stopping this frame...
                if image_33.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_33.tStartRefresh + thisISI-frameTolerance:
                        # keep track of stop time/frame for later
                        image_33.tStop = t  # not accounting for scr refresh
                        image_33.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_33.stopped')
                        # update status
                        image_33.status = FINISHED
                        image_33.setAutoDraw(False)
                
                # *image_34* updates
                
                # if image_34 is starting this frame...
                if image_34.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_34.frameNStart = frameN  # exact frame index
                    image_34.tStart = t  # local t and not account for scr refresh
                    image_34.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_34, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_34.started')
                    # update status
                    image_34.status = STARTED
                    image_34.setAutoDraw(True)
                
                # if image_34 is active this frame...
                if image_34.status == STARTED:
                    # update params
                    pass
                
                # if image_34 is stopping this frame...
                if image_34.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_34.tStartRefresh + thisISI-frameTolerance:
                        # keep track of stop time/frame for later
                        image_34.tStop = t  # not accounting for scr refresh
                        image_34.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_34.stopped')
                        # update status
                        image_34.status = FINISHED
                        image_34.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, inputs=inputs, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in fixationComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "fixation" ---
            for thisComponent in fixationComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('fixation.stopped', globalClock.getTime())
            # the Routine "fixation" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "Cue" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('Cue.started', globalClock.getTime())
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
            frameN = -1
            
            # --- Run Routine "Cue" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 1.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_38* updates
                
                # if image_38 is starting this frame...
                if image_38.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_38.frameNStart = frameN  # exact frame index
                    image_38.tStart = t  # local t and not account for scr refresh
                    image_38.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_38, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_38.started')
                    # update status
                    image_38.status = STARTED
                    image_38.setAutoDraw(True)
                
                # if image_38 is active this frame...
                if image_38.status == STARTED:
                    # update params
                    pass
                
                # if image_38 is stopping this frame...
                if image_38.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_38.tStartRefresh + 1-frameTolerance:
                        # keep track of stop time/frame for later
                        image_38.tStop = t  # not accounting for scr refresh
                        image_38.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_38.stopped')
                        # update status
                        image_38.status = FINISHED
                        image_38.setAutoDraw(False)
                
                # *image_36* updates
                
                # if image_36 is starting this frame...
                if image_36.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_36.frameNStart = frameN  # exact frame index
                    image_36.tStart = t  # local t and not account for scr refresh
                    image_36.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_36, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_36.started')
                    # update status
                    image_36.status = STARTED
                    image_36.setAutoDraw(True)
                
                # if image_36 is active this frame...
                if image_36.status == STARTED:
                    # update params
                    pass
                
                # if image_36 is stopping this frame...
                if image_36.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_36.tStartRefresh + 1-frameTolerance:
                        # keep track of stop time/frame for later
                        image_36.tStop = t  # not accounting for scr refresh
                        image_36.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_36.stopped')
                        # update status
                        image_36.status = FINISHED
                        image_36.setAutoDraw(False)
                
                # *image_37* updates
                
                # if image_37 is starting this frame...
                if image_37.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_37.frameNStart = frameN  # exact frame index
                    image_37.tStart = t  # local t and not account for scr refresh
                    image_37.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_37, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_37.started')
                    # update status
                    image_37.status = STARTED
                    image_37.setAutoDraw(True)
                
                # if image_37 is active this frame...
                if image_37.status == STARTED:
                    # update params
                    pass
                
                # if image_37 is stopping this frame...
                if image_37.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_37.tStartRefresh + 1-frameTolerance:
                        # keep track of stop time/frame for later
                        image_37.tStop = t  # not accounting for scr refresh
                        image_37.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_37.stopped')
                        # update status
                        image_37.status = FINISHED
                        image_37.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, inputs=inputs, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in CueComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "Cue" ---
            for thisComponent in CueComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('Cue.stopped', globalClock.getTime())
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-1.000000)
            
            # --- Prepare to start Routine "Stim" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('Stim.started', globalClock.getTime())
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
            frameN = -1
            
            # --- Run Routine "Stim" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 10.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_39* updates
                
                # if image_39 is starting this frame...
                if image_39.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    image_39.frameNStart = frameN  # exact frame index
                    image_39.tStart = t  # local t and not account for scr refresh
                    image_39.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_39, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_39.started')
                    # update status
                    image_39.status = STARTED
                    image_39.setAutoDraw(True)
                
                # if image_39 is active this frame...
                if image_39.status == STARTED:
                    # update params
                    pass
                
                # if image_39 is stopping this frame...
                if image_39.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_39.tStartRefresh + 0.1-frameTolerance:
                        # keep track of stop time/frame for later
                        image_39.tStop = t  # not accounting for scr refresh
                        image_39.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_39.stopped')
                        # update status
                        image_39.status = FINISHED
                        image_39.setAutoDraw(False)
                
                # *image_41* updates
                
                # if image_41 is starting this frame...
                if image_41.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
                    # keep track of start time/frame for later
                    image_41.frameNStart = frameN  # exact frame index
                    image_41.tStart = t  # local t and not account for scr refresh
                    image_41.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_41, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_41.started')
                    # update status
                    image_41.status = STARTED
                    image_41.setAutoDraw(True)
                
                # if image_41 is active this frame...
                if image_41.status == STARTED:
                    # update params
                    pass
                
                # if image_41 is stopping this frame...
                if image_41.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_41.tStartRefresh + 9.9-frameTolerance:
                        # keep track of stop time/frame for later
                        image_41.tStop = t  # not accounting for scr refresh
                        image_41.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_41.stopped')
                        # update status
                        image_41.status = FINISHED
                        image_41.setAutoDraw(False)
                
                # *image* updates
                
                # if image is starting this frame...
                if image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image.frameNStart = frameN  # exact frame index
                    image.tStart = t  # local t and not account for scr refresh
                    image.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image.started')
                    # update status
                    image.status = STARTED
                    image.setAutoDraw(True)
                
                # if image is active this frame...
                if image.status == STARTED:
                    # update params
                    pass
                
                # if image is stopping this frame...
                if image.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        image.tStop = t  # not accounting for scr refresh
                        image.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image.stopped')
                        # update status
                        image.status = FINISHED
                        image.setAutoDraw(False)
                
                # *image_2* updates
                
                # if image_2 is starting this frame...
                if image_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_2.frameNStart = frameN  # exact frame index
                    image_2.tStart = t  # local t and not account for scr refresh
                    image_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_2.started')
                    # update status
                    image_2.status = STARTED
                    image_2.setAutoDraw(True)
                
                # if image_2 is active this frame...
                if image_2.status == STARTED:
                    # update params
                    pass
                
                # if image_2 is stopping this frame...
                if image_2.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_2.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        image_2.tStop = t  # not accounting for scr refresh
                        image_2.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_2.stopped')
                        # update status
                        image_2.status = FINISHED
                        image_2.setAutoDraw(False)
                
                # *key_resp_2* updates
                waitOnFlip = False
                
                # if key_resp_2 is starting this frame...
                if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_2.frameNStart = frameN  # exact frame index
                    key_resp_2.tStart = t  # local t and not account for scr refresh
                    key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'key_resp_2.started')
                    # update status
                    key_resp_2.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
                
                # if key_resp_2 is stopping this frame...
                if key_resp_2.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > key_resp_2.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        key_resp_2.tStop = t  # not accounting for scr refresh
                        key_resp_2.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'key_resp_2.stopped')
                        # update status
                        key_resp_2.status = FINISHED
                        key_resp_2.status = FINISHED
                if key_resp_2.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_2.getKeys(keyList=['z','m','None'], ignoreKeys=["escape"], waitRelease=False)
                    _key_resp_2_allKeys.extend(theseKeys)
                    if len(_key_resp_2_allKeys):
                        key_resp_2.keys = _key_resp_2_allKeys[0].name  # just the first key pressed
                        key_resp_2.rt = _key_resp_2_allKeys[0].rt
                        key_resp_2.duration = _key_resp_2_allKeys[0].duration
                        # was this correct?
                        if (key_resp_2.keys == str(corrAns)) or (key_resp_2.keys == corrAns):
                            key_resp_2.corr = 1
                        else:
                            key_resp_2.corr = 0
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, inputs=inputs, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in StimComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "Stim" ---
            for thisComponent in StimComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('Stim.stopped', globalClock.getTime())
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
                trials.addData('key_resp_2.duration', key_resp_2.duration)
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-10.000000)
            
            # --- Prepare to start Routine "Feedback" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('Feedback.started', globalClock.getTime())
            # Run 'Begin Routine' code from code
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
            sound_9.seek(0)
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
            frameN = -1
            
            # --- Run Routine "Feedback" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 5.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_42* updates
                
                # if image_42 is starting this frame...
                if image_42.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    image_42.frameNStart = frameN  # exact frame index
                    image_42.tStart = t  # local t and not account for scr refresh
                    image_42.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_42, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_42.started')
                    # update status
                    image_42.status = STARTED
                    image_42.setAutoDraw(True)
                
                # if image_42 is active this frame...
                if image_42.status == STARTED:
                    # update params
                    pass
                
                # if image_42 is stopping this frame...
                if image_42.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_42.tStartRefresh + 5-frameTolerance:
                        # keep track of stop time/frame for later
                        image_42.tStop = t  # not accounting for scr refresh
                        image_42.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_42.stopped')
                        # update status
                        image_42.status = FINISHED
                        image_42.setAutoDraw(False)
                
                # *image_3* updates
                
                # if image_3 is starting this frame...
                if image_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_3.frameNStart = frameN  # exact frame index
                    image_3.tStart = t  # local t and not account for scr refresh
                    image_3.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_3, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_3.started')
                    # update status
                    image_3.status = STARTED
                    image_3.setAutoDraw(True)
                
                # if image_3 is active this frame...
                if image_3.status == STARTED:
                    # update params
                    pass
                
                # if image_3 is stopping this frame...
                if image_3.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_3.tStartRefresh + 5-frameTolerance:
                        # keep track of stop time/frame for later
                        image_3.tStop = t  # not accounting for scr refresh
                        image_3.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_3.stopped')
                        # update status
                        image_3.status = FINISHED
                        image_3.setAutoDraw(False)
                
                # *image_43* updates
                
                # if image_43 is starting this frame...
                if image_43.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_43.frameNStart = frameN  # exact frame index
                    image_43.tStart = t  # local t and not account for scr refresh
                    image_43.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_43, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_43.started')
                    # update status
                    image_43.status = STARTED
                    image_43.setAutoDraw(True)
                
                # if image_43 is active this frame...
                if image_43.status == STARTED:
                    # update params
                    pass
                
                # if image_43 is stopping this frame...
                if image_43.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_43.tStartRefresh + 5-frameTolerance:
                        # keep track of stop time/frame for later
                        image_43.tStop = t  # not accounting for scr refresh
                        image_43.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_43.stopped')
                        # update status
                        image_43.status = FINISHED
                        image_43.setAutoDraw(False)
                
                # if sound_9 is starting this frame...
                if sound_9.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    sound_9.frameNStart = frameN  # exact frame index
                    sound_9.tStart = t  # local t and not account for scr refresh
                    sound_9.tStartRefresh = tThisFlipGlobal  # on global time
                    # add timestamp to datafile
                    thisExp.addData('sound_9.started', tThisFlipGlobal)
                    # update status
                    sound_9.status = STARTED
                    sound_9.play(when=win)  # sync with win flip
                
                # if sound_9 is stopping this frame...
                if sound_9.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > sound_9.tStartRefresh + 5-frameTolerance:
                        # keep track of stop time/frame for later
                        sound_9.tStop = t  # not accounting for scr refresh
                        sound_9.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'sound_9.stopped')
                        # update status
                        sound_9.status = FINISHED
                        sound_9.stop()
                # update sound_9 status according to whether it's playing
                if sound_9.isPlaying:
                    sound_9.status = STARTED
                elif sound_9.isFinished:
                    sound_9.status = FINISHED
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, inputs=inputs, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in FeedbackComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "Feedback" ---
            for thisComponent in FeedbackComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('Feedback.stopped', globalClock.getTime())
            sound_9.pause()  # ensure sound has stopped at end of Routine
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-5.000000)
            
            # --- Prepare to start Routine "UpdateAccuracy" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('UpdateAccuracy.started', globalClock.getTime())
            # Run 'Begin Routine' code from code_2
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
            frameN = -1
            
            # --- Run Routine "UpdateAccuracy" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, inputs=inputs, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in UpdateAccuracyComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "UpdateAccuracy" ---
            for thisComponent in UpdateAccuracyComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('UpdateAccuracy.stopped', globalClock.getTime())
            # the Routine "UpdateAccuracy" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed 1 repeats of 'trials'
        
        
        # --- Prepare to start Routine "continueStatus" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('continueStatus.started', globalClock.getTime())
        # Run 'Begin Routine' code from code_11
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
        sound_10.seek(0)
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
        frameN = -1
        
        # --- Run Routine "continueStatus" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_24* updates
            
            # if text_24 is starting this frame...
            if text_24.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_24.frameNStart = frameN  # exact frame index
                text_24.tStart = t  # local t and not account for scr refresh
                text_24.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_24, 'tStartRefresh')  # time at next scr refresh
                # update status
                text_24.status = STARTED
                text_24.setAutoDraw(True)
            
            # if text_24 is active this frame...
            if text_24.status == STARTED:
                # update params
                text_24.setText(outPut, log=False)
            
            # *key_resp_18* updates
            waitOnFlip = False
            
            # if key_resp_18 is starting this frame...
            if key_resp_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_18.frameNStart = frameN  # exact frame index
                key_resp_18.tStart = t  # local t and not account for scr refresh
                key_resp_18.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_18, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_18.started')
                # update status
                key_resp_18.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_18.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_18.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_18.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_18.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_18_allKeys.extend(theseKeys)
                if len(_key_resp_18_allKeys):
                    key_resp_18.keys = _key_resp_18_allKeys[-1].name  # just the last key pressed
                    key_resp_18.rt = _key_resp_18_allKeys[-1].rt
                    key_resp_18.duration = _key_resp_18_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # if sound_10 is starting this frame...
            if sound_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sound_10.frameNStart = frameN  # exact frame index
                sound_10.tStart = t  # local t and not account for scr refresh
                sound_10.tStartRefresh = tThisFlipGlobal  # on global time
                # update status
                sound_10.status = STARTED
                sound_10.play(when=win)  # sync with win flip
            
            # if sound_10 is stopping this frame...
            if sound_10.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > sound_10.tStartRefresh + 20-frameTolerance:
                    # keep track of stop time/frame for later
                    sound_10.tStop = t  # not accounting for scr refresh
                    sound_10.frameNStop = frameN  # exact frame index
                    # update status
                    sound_10.status = FINISHED
                    sound_10.stop()
            # update sound_10 status according to whether it's playing
            if sound_10.isPlaying:
                sound_10.status = STARTED
            elif sound_10.isFinished:
                sound_10.status = FINISHED
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in continueStatusComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "continueStatus" ---
        for thisComponent in continueStatusComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('continueStatus.stopped', globalClock.getTime())
        # Run 'End Routine' code from code_12
        if isForward == 3:
            core.quit()
        # check responses
        if key_resp_18.keys in ['', [], None]:  # No response was made
            key_resp_18.keys = None
        block.addData('key_resp_18.keys',key_resp_18.keys)
        if key_resp_18.keys != None:  # we had a response
            block.addData('key_resp_18.rt', key_resp_18.rt)
            block.addData('key_resp_18.duration', key_resp_18.duration)
        sound_10.pause()  # ensure sound has stopped at end of Routine
        # the Routine "continueStatus" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 3 repeats of 'block'
    
    
    # --- Prepare to start Routine "Main_Exp_Instructions" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('Main_Exp_Instructions.started', globalClock.getTime())
    key_resp_9.keys = []
    key_resp_9.rt = []
    _key_resp_9_allKeys = []
    sound_13.setSound('audio/F12.wav', secs=40, hamming=True)
    sound_13.setVolume(1, log=False)
    sound_13.seek(0)
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
    frameN = -1
    
    # --- Run Routine "Main_Exp_Instructions" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_40* updates
        
        # if image_40 is starting this frame...
        if image_40.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_40.frameNStart = frameN  # exact frame index
            image_40.tStart = t  # local t and not account for scr refresh
            image_40.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_40, 'tStartRefresh')  # time at next scr refresh
            # update status
            image_40.status = STARTED
            image_40.setAutoDraw(True)
        
        # if image_40 is active this frame...
        if image_40.status == STARTED:
            # update params
            pass
        
        # *key_resp_9* updates
        waitOnFlip = False
        
        # if key_resp_9 is starting this frame...
        if key_resp_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_9.frameNStart = frameN  # exact frame index
            key_resp_9.tStart = t  # local t and not account for scr refresh
            key_resp_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_9, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_9.started')
            # update status
            key_resp_9.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_9.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_9.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_9.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_9.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_9_allKeys.extend(theseKeys)
            if len(_key_resp_9_allKeys):
                key_resp_9.keys = _key_resp_9_allKeys[-1].name  # just the last key pressed
                key_resp_9.rt = _key_resp_9_allKeys[-1].rt
                key_resp_9.duration = _key_resp_9_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # if sound_13 is starting this frame...
        if sound_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_13.frameNStart = frameN  # exact frame index
            sound_13.tStart = t  # local t and not account for scr refresh
            sound_13.tStartRefresh = tThisFlipGlobal  # on global time
            # update status
            sound_13.status = STARTED
            sound_13.play(when=win)  # sync with win flip
        
        # if sound_13 is stopping this frame...
        if sound_13.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_13.tStartRefresh + 40-frameTolerance:
                # keep track of stop time/frame for later
                sound_13.tStop = t  # not accounting for scr refresh
                sound_13.frameNStop = frameN  # exact frame index
                # update status
                sound_13.status = FINISHED
                sound_13.stop()
        # update sound_13 status according to whether it's playing
        if sound_13.isPlaying:
            sound_13.status = STARTED
        elif sound_13.isFinished:
            sound_13.status = FINISHED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Main_Exp_InstructionsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Main_Exp_Instructions" ---
    for thisComponent in Main_Exp_InstructionsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('Main_Exp_Instructions.stopped', globalClock.getTime())
    # check responses
    if key_resp_9.keys in ['', [], None]:  # No response was made
        key_resp_9.keys = None
    thisExp.addData('key_resp_9.keys',key_resp_9.keys)
    if key_resp_9.keys != None:  # we had a response
        thisExp.addData('key_resp_9.rt', key_resp_9.rt)
        thisExp.addData('key_resp_9.duration', key_resp_9.duration)
    thisExp.nextEntry()
    sound_13.pause()  # ensure sound has stopped at end of Routine
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
            globals()[paramName] = thisTest_trial[paramName]
    
    for thisTest_trial in test_trials:
        currentLoop = test_trials
        thisExp.timestampOnFlip(win, 'thisRow.t')
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                inputs=inputs, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisTest_trial.rgb)
        if thisTest_trial != None:
            for paramName in thisTest_trial:
                globals()[paramName] = thisTest_trial[paramName]
        
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
                globals()[paramName] = thisBlockn[paramName]
        
        for thisBlockn in blockn:
            currentLoop = blockn
            thisExp.timestampOnFlip(win, 'thisRow.t')
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    inputs=inputs, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisBlockn.rgb)
            if thisBlockn != None:
                for paramName in thisBlockn:
                    globals()[paramName] = thisBlockn[paramName]
            
            # --- Prepare to start Routine "inter_trial_interval" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('inter_trial_interval.started', globalClock.getTime())
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
            frameN = -1
            
            # --- Run Routine "inter_trial_interval" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 0.8:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_31* updates
                
                # if image_31 is starting this frame...
                if image_31.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_31.frameNStart = frameN  # exact frame index
                    image_31.tStart = t  # local t and not account for scr refresh
                    image_31.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_31, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    image_31.status = STARTED
                    image_31.setAutoDraw(True)
                
                # if image_31 is active this frame...
                if image_31.status == STARTED:
                    # update params
                    pass
                
                # if image_31 is stopping this frame...
                if image_31.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_31.tStartRefresh + 0.8-frameTolerance:
                        # keep track of stop time/frame for later
                        image_31.tStop = t  # not accounting for scr refresh
                        image_31.frameNStop = frameN  # exact frame index
                        # update status
                        image_31.status = FINISHED
                        image_31.setAutoDraw(False)
                
                # *image_32* updates
                
                # if image_32 is starting this frame...
                if image_32.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_32.frameNStart = frameN  # exact frame index
                    image_32.tStart = t  # local t and not account for scr refresh
                    image_32.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_32, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    image_32.status = STARTED
                    image_32.setAutoDraw(True)
                
                # if image_32 is active this frame...
                if image_32.status == STARTED:
                    # update params
                    pass
                
                # if image_32 is stopping this frame...
                if image_32.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_32.tStartRefresh + 0.8-frameTolerance:
                        # keep track of stop time/frame for later
                        image_32.tStop = t  # not accounting for scr refresh
                        image_32.frameNStop = frameN  # exact frame index
                        # update status
                        image_32.status = FINISHED
                        image_32.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, inputs=inputs, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in inter_trial_intervalComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "inter_trial_interval" ---
            for thisComponent in inter_trial_intervalComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('inter_trial_interval.stopped', globalClock.getTime())
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-0.800000)
            
            # --- Prepare to start Routine "ISIcode" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('ISIcode.started', globalClock.getTime())
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
            frameN = -1
            
            # --- Run Routine "ISIcode" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, inputs=inputs, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in ISIcodeComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "ISIcode" ---
            for thisComponent in ISIcodeComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('ISIcode.stopped', globalClock.getTime())
            # Run 'End Routine' code from code_10
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
            
            # --- Prepare to start Routine "fixation" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('fixation.started', globalClock.getTime())
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
            frameN = -1
            
            # --- Run Routine "fixation" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_35* updates
                
                # if image_35 is starting this frame...
                if image_35.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_35.frameNStart = frameN  # exact frame index
                    image_35.tStart = t  # local t and not account for scr refresh
                    image_35.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_35, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_35.started')
                    # update status
                    image_35.status = STARTED
                    image_35.setAutoDraw(True)
                
                # if image_35 is active this frame...
                if image_35.status == STARTED:
                    # update params
                    pass
                
                # if image_35 is stopping this frame...
                if image_35.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_35.tStartRefresh + thisISI-frameTolerance:
                        # keep track of stop time/frame for later
                        image_35.tStop = t  # not accounting for scr refresh
                        image_35.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_35.stopped')
                        # update status
                        image_35.status = FINISHED
                        image_35.setAutoDraw(False)
                
                # *image_33* updates
                
                # if image_33 is starting this frame...
                if image_33.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_33.frameNStart = frameN  # exact frame index
                    image_33.tStart = t  # local t and not account for scr refresh
                    image_33.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_33, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_33.started')
                    # update status
                    image_33.status = STARTED
                    image_33.setAutoDraw(True)
                
                # if image_33 is active this frame...
                if image_33.status == STARTED:
                    # update params
                    pass
                
                # if image_33 is stopping this frame...
                if image_33.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_33.tStartRefresh + thisISI-frameTolerance:
                        # keep track of stop time/frame for later
                        image_33.tStop = t  # not accounting for scr refresh
                        image_33.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_33.stopped')
                        # update status
                        image_33.status = FINISHED
                        image_33.setAutoDraw(False)
                
                # *image_34* updates
                
                # if image_34 is starting this frame...
                if image_34.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_34.frameNStart = frameN  # exact frame index
                    image_34.tStart = t  # local t and not account for scr refresh
                    image_34.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_34, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_34.started')
                    # update status
                    image_34.status = STARTED
                    image_34.setAutoDraw(True)
                
                # if image_34 is active this frame...
                if image_34.status == STARTED:
                    # update params
                    pass
                
                # if image_34 is stopping this frame...
                if image_34.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_34.tStartRefresh + thisISI-frameTolerance:
                        # keep track of stop time/frame for later
                        image_34.tStop = t  # not accounting for scr refresh
                        image_34.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_34.stopped')
                        # update status
                        image_34.status = FINISHED
                        image_34.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, inputs=inputs, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in fixationComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "fixation" ---
            for thisComponent in fixationComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('fixation.stopped', globalClock.getTime())
            # the Routine "fixation" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "Cue" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('Cue.started', globalClock.getTime())
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
            frameN = -1
            
            # --- Run Routine "Cue" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 1.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_38* updates
                
                # if image_38 is starting this frame...
                if image_38.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_38.frameNStart = frameN  # exact frame index
                    image_38.tStart = t  # local t and not account for scr refresh
                    image_38.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_38, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_38.started')
                    # update status
                    image_38.status = STARTED
                    image_38.setAutoDraw(True)
                
                # if image_38 is active this frame...
                if image_38.status == STARTED:
                    # update params
                    pass
                
                # if image_38 is stopping this frame...
                if image_38.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_38.tStartRefresh + 1-frameTolerance:
                        # keep track of stop time/frame for later
                        image_38.tStop = t  # not accounting for scr refresh
                        image_38.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_38.stopped')
                        # update status
                        image_38.status = FINISHED
                        image_38.setAutoDraw(False)
                
                # *image_36* updates
                
                # if image_36 is starting this frame...
                if image_36.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_36.frameNStart = frameN  # exact frame index
                    image_36.tStart = t  # local t and not account for scr refresh
                    image_36.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_36, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_36.started')
                    # update status
                    image_36.status = STARTED
                    image_36.setAutoDraw(True)
                
                # if image_36 is active this frame...
                if image_36.status == STARTED:
                    # update params
                    pass
                
                # if image_36 is stopping this frame...
                if image_36.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_36.tStartRefresh + 1-frameTolerance:
                        # keep track of stop time/frame for later
                        image_36.tStop = t  # not accounting for scr refresh
                        image_36.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_36.stopped')
                        # update status
                        image_36.status = FINISHED
                        image_36.setAutoDraw(False)
                
                # *image_37* updates
                
                # if image_37 is starting this frame...
                if image_37.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_37.frameNStart = frameN  # exact frame index
                    image_37.tStart = t  # local t and not account for scr refresh
                    image_37.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_37, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_37.started')
                    # update status
                    image_37.status = STARTED
                    image_37.setAutoDraw(True)
                
                # if image_37 is active this frame...
                if image_37.status == STARTED:
                    # update params
                    pass
                
                # if image_37 is stopping this frame...
                if image_37.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_37.tStartRefresh + 1-frameTolerance:
                        # keep track of stop time/frame for later
                        image_37.tStop = t  # not accounting for scr refresh
                        image_37.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_37.stopped')
                        # update status
                        image_37.status = FINISHED
                        image_37.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, inputs=inputs, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in CueComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "Cue" ---
            for thisComponent in CueComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('Cue.stopped', globalClock.getTime())
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-1.000000)
            
            # --- Prepare to start Routine "Stim" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('Stim.started', globalClock.getTime())
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
            frameN = -1
            
            # --- Run Routine "Stim" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 10.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_39* updates
                
                # if image_39 is starting this frame...
                if image_39.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    image_39.frameNStart = frameN  # exact frame index
                    image_39.tStart = t  # local t and not account for scr refresh
                    image_39.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_39, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_39.started')
                    # update status
                    image_39.status = STARTED
                    image_39.setAutoDraw(True)
                
                # if image_39 is active this frame...
                if image_39.status == STARTED:
                    # update params
                    pass
                
                # if image_39 is stopping this frame...
                if image_39.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_39.tStartRefresh + 0.1-frameTolerance:
                        # keep track of stop time/frame for later
                        image_39.tStop = t  # not accounting for scr refresh
                        image_39.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_39.stopped')
                        # update status
                        image_39.status = FINISHED
                        image_39.setAutoDraw(False)
                
                # *image_41* updates
                
                # if image_41 is starting this frame...
                if image_41.status == NOT_STARTED and tThisFlip >= 0.1-frameTolerance:
                    # keep track of start time/frame for later
                    image_41.frameNStart = frameN  # exact frame index
                    image_41.tStart = t  # local t and not account for scr refresh
                    image_41.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_41, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_41.started')
                    # update status
                    image_41.status = STARTED
                    image_41.setAutoDraw(True)
                
                # if image_41 is active this frame...
                if image_41.status == STARTED:
                    # update params
                    pass
                
                # if image_41 is stopping this frame...
                if image_41.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_41.tStartRefresh + 9.9-frameTolerance:
                        # keep track of stop time/frame for later
                        image_41.tStop = t  # not accounting for scr refresh
                        image_41.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_41.stopped')
                        # update status
                        image_41.status = FINISHED
                        image_41.setAutoDraw(False)
                
                # *image* updates
                
                # if image is starting this frame...
                if image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image.frameNStart = frameN  # exact frame index
                    image.tStart = t  # local t and not account for scr refresh
                    image.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image.started')
                    # update status
                    image.status = STARTED
                    image.setAutoDraw(True)
                
                # if image is active this frame...
                if image.status == STARTED:
                    # update params
                    pass
                
                # if image is stopping this frame...
                if image.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        image.tStop = t  # not accounting for scr refresh
                        image.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image.stopped')
                        # update status
                        image.status = FINISHED
                        image.setAutoDraw(False)
                
                # *image_2* updates
                
                # if image_2 is starting this frame...
                if image_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_2.frameNStart = frameN  # exact frame index
                    image_2.tStart = t  # local t and not account for scr refresh
                    image_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_2.started')
                    # update status
                    image_2.status = STARTED
                    image_2.setAutoDraw(True)
                
                # if image_2 is active this frame...
                if image_2.status == STARTED:
                    # update params
                    pass
                
                # if image_2 is stopping this frame...
                if image_2.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_2.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        image_2.tStop = t  # not accounting for scr refresh
                        image_2.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_2.stopped')
                        # update status
                        image_2.status = FINISHED
                        image_2.setAutoDraw(False)
                
                # *key_resp_2* updates
                waitOnFlip = False
                
                # if key_resp_2 is starting this frame...
                if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_2.frameNStart = frameN  # exact frame index
                    key_resp_2.tStart = t  # local t and not account for scr refresh
                    key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'key_resp_2.started')
                    # update status
                    key_resp_2.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
                
                # if key_resp_2 is stopping this frame...
                if key_resp_2.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > key_resp_2.tStartRefresh + 10-frameTolerance:
                        # keep track of stop time/frame for later
                        key_resp_2.tStop = t  # not accounting for scr refresh
                        key_resp_2.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'key_resp_2.stopped')
                        # update status
                        key_resp_2.status = FINISHED
                        key_resp_2.status = FINISHED
                if key_resp_2.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_2.getKeys(keyList=['z','m','None'], ignoreKeys=["escape"], waitRelease=False)
                    _key_resp_2_allKeys.extend(theseKeys)
                    if len(_key_resp_2_allKeys):
                        key_resp_2.keys = _key_resp_2_allKeys[0].name  # just the first key pressed
                        key_resp_2.rt = _key_resp_2_allKeys[0].rt
                        key_resp_2.duration = _key_resp_2_allKeys[0].duration
                        # was this correct?
                        if (key_resp_2.keys == str(corrAns)) or (key_resp_2.keys == corrAns):
                            key_resp_2.corr = 1
                        else:
                            key_resp_2.corr = 0
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, inputs=inputs, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in StimComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "Stim" ---
            for thisComponent in StimComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('Stim.stopped', globalClock.getTime())
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
                blockn.addData('key_resp_2.duration', key_resp_2.duration)
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-10.000000)
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed 1.0 repeats of 'blockn'
        
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 1 repeats of 'test_trials'
    
    
    # --- Prepare to start Routine "finish" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('finish.started', globalClock.getTime())
    sound_12.setSound('audio/F-f.wav', secs=3.5, hamming=True)
    sound_12.setVolume(1.0, log=False)
    sound_12.seek(0)
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
    frameN = -1
    
    # --- Run Routine "finish" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 3.5:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_3* updates
        
        # if text_3 is starting this frame...
        if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_3.frameNStart = frameN  # exact frame index
            text_3.tStart = t  # local t and not account for scr refresh
            text_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_3.started')
            # update status
            text_3.status = STARTED
            text_3.setAutoDraw(True)
        
        # if text_3 is active this frame...
        if text_3.status == STARTED:
            # update params
            pass
        
        # if text_3 is stopping this frame...
        if text_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_3.tStartRefresh + 3.5-frameTolerance:
                # keep track of stop time/frame for later
                text_3.tStop = t  # not accounting for scr refresh
                text_3.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_3.stopped')
                # update status
                text_3.status = FINISHED
                text_3.setAutoDraw(False)
        
        # if sound_12 is starting this frame...
        if sound_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_12.frameNStart = frameN  # exact frame index
            sound_12.tStart = t  # local t and not account for scr refresh
            sound_12.tStartRefresh = tThisFlipGlobal  # on global time
            # update status
            sound_12.status = STARTED
            sound_12.play(when=win)  # sync with win flip
        
        # if sound_12 is stopping this frame...
        if sound_12.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_12.tStartRefresh + 3.5-frameTolerance:
                # keep track of stop time/frame for later
                sound_12.tStop = t  # not accounting for scr refresh
                sound_12.frameNStop = frameN  # exact frame index
                # update status
                sound_12.status = FINISHED
                sound_12.stop()
        # update sound_12 status according to whether it's playing
        if sound_12.isPlaying:
            sound_12.status = STARTED
        elif sound_12.isFinished:
            sound_12.status = FINISHED
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in finishComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "finish" ---
    for thisComponent in finishComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('finish.stopped', globalClock.getTime())
    sound_12.pause()  # ensure sound has stopped at end of Routine
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-3.500000)
    
    # mark experiment as finished
    endExperiment(thisExp, win=win, inputs=inputs)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, inputs=None, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    inputs : dict
        Dictionary of input devices by name.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # shut down eyetracker, if there is one
    if inputs is not None:
        if 'eyetracker' in inputs and inputs['eyetracker'] is not None:
            inputs['eyetracker'].setConnectionState(False)
    logging.flush()


def quit(thisExp, win=None, inputs=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    inputs : dict
        Dictionary of input devices by name.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    if inputs is not None:
        if 'eyetracker' in inputs and inputs['eyetracker'] is not None:
            inputs['eyetracker'].setConnectionState(False)
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    inputs = setupInputs(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win, 
        inputs=inputs
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win, inputs=inputs)
