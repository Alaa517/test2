window.globalProvideData('slide', '{"title":"اختر الإجابة الصحيحة","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide2","width":720,"height":640,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6RaOwjW5Fil","actionGroups":{"ActGrpOnNextButtonClick":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5rW6MemuUKn.6Zyx4N3mtdB"}}]},"ActGrpOnPrevButtonClick":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]},"ReviewInt_6EDeATKzfTf":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6EDeATKzfTf.5o58Qz02OnY"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6EDeATKzfTf.6dC9rUe1Qle"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6EDeATKzfTf.6czAoBMPdUT"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6Qo5M33ZOyw.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6EDeATKzfTf_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6EDeATKzfTf_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6EDeATKzfTf","typea":"var","valueb":"6BXmRxaqoHL","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6BXmRxaqoHL.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6EDeATKzfTf"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6BXmRxaqoHL.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6EDeATKzfTf"}]}]}]},"ReviewIntCorrectIncorrect_6EDeATKzfTf":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6EDeATKzfTf.5o58Qz02OnY"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6EDeATKzfTf.6dC9rUe1Qle"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6EDeATKzfTf.6czAoBMPdUT.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6EDeATKzfTf.6czAoBMPdUT"}}]},{"kind":"exe_actiongroup","id":"6EDeATKzfTf.6czAoBMPdUT.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"6EDeATKzfTf.6czAoBMPdUT"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6EDeATKzfTf":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6EDeATKzfTf"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_6EDeATKzfTf":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6EDeATKzfTf.5o58Qz02OnY"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6EDeATKzfTf.6dC9rUe1Qle"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6EDeATKzfTf.6czAoBMPdUT"},"enabled":{"type":"boolean","value":false}}]},"6EDeATKzfTf_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6Qo5M33ZOyw.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6BXmRxaqoHL.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6EDeATKzfTf"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6Qo5M33ZOyw.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6Qo5M33ZOyw.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6EDeATKzfTf"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_6RaOwjW5Fil":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnNextButtonClick"}]},"NavigationRestrictionPreviousSlide_6RaOwjW5Fil":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnPrevButtonClick"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6BXmRxaqoHL.$QuizComplete","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.6BXmRxaqoHL_timer"},{"kind":"showtimer","id":"_player.6BXmRxaqoHL_timer"}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6EDeATKzfTf","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6EDeATKzfTf","typea":"var","valueb":"6BXmRxaqoHL","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6BXmRxaqoHL"},"completed_slide_ref":{"type":"string","value":"_player.5rW6MemuUKn.64zYCcH0UJC"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6EDeATKzfTf","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6EDeATKzfTf","typea":"var","valueb":"6BXmRxaqoHL","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6BXmRxaqoHL"},"completed_slide_ref":{"type":"string","value":"_player.5rW6MemuUKn.64zYCcH0UJC"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6RaOwjW5Fil"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6RaOwjW5Fil"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_631hH6uzdYS","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_631hH6uzdYS","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6EDeATKzfTf","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6EDeATKzfTf"}],"elseActions":[{"kind":"exe_actiongroup","id":"6EDeATKzfTf_CheckAnswered"}]}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6EDeATKzfTf"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6EDeATKzfTf.6dC9rUe1Qle"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6EDeATKzfTf.5o58Qz02OnY"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6EDeATKzfTf.6czAoBMPdUT"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6agMIc3Yxi5"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6WdxVjW6kbX"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"61qtT6KLCnE"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6bTqSbosN1c"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6lmjPw3YFeI"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":359.5,"rotateYPos":51.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":721,"bottom":105,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":4}},"html5data":{"xPos":-1,"yPos":-1,"width":721,"height":105,"strokewidth":1}},"width":720,"height":104,"resume":true,"useHandCursor":true,"id":"61qtT6KLCnE"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":536,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":359.5,"rotateYPos":51.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":721,"bottom":105,"altText":"Rectangle 2","pngfb":false,"pr":{"l":"Lib","i":4}},"html5data":{"xPos":-1,"yPos":-1,"width":721,"height":105,"strokewidth":1}},"width":720,"height":104,"resume":true,"useHandCursor":true,"id":"6bTqSbosN1c"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":104,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":359.5,"rotateYPos":215.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":721,"bottom":433,"altText":"Rectangle 3","pngfb":false,"pr":{"l":"Lib","i":5}},"html5data":{"xPos":-1,"yPos":-1,"width":721,"height":433,"strokewidth":1}},"width":720,"height":432,"resume":true,"useHandCursor":true,"id":"6lmjPw3YFeI"},{"kind":"scrollarea","contentwidth":528,"contentheight":228,"objects":[{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6Ij1ys4oFS4_196902946","id":"01","linkId":"txt__default_6dC9rUe1Qle","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":461,"bottom":71,"pngfb":false,"pr":{"l":"Lib","i":9}}}],"shapemaskId":"","xPos":24,"yPos":73,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":252,"rotateYPos":41,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":504,"bottom":82,"altText":"المصرية القديمة ","pngfb":false,"pr":{"l":"Lib","i":7}},"html5data":{"xPos":-1,"yPos":-1,"width":505,"height":83,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":504,"bottom":82,"altText":"المصرية القديمة ","pngfb":false,"pr":{"l":"Lib","i":8}},"html5data":{"xPos":-1,"yPos":-1,"width":505,"height":83,"strokewidth":3}}}],"width":504,"height":82,"resume":true,"useHandCursor":true,"id":"6dC9rUe1Qle","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5o58Qz02OnY.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5o58Qz02OnY._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5o58Qz02OnY"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6czAoBMPdUT.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6czAoBMPdUT._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6czAoBMPdUT"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6HlMPyUDDwt_-8574425","id":"01","linkId":"txt__default_5o58Qz02OnY","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":460,"bottom":63,"pngfb":false,"pr":{"l":"Lib","i":12}}}],"shapemaskId":"","xPos":24,"yPos":0,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":252,"rotateYPos":36.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":504,"bottom":73,"altText":"القبطية","pngfb":false,"pr":{"l":"Lib","i":10}},"html5data":{"xPos":-1,"yPos":-1,"width":505,"height":74,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":504,"bottom":73,"altText":"القبطية","pngfb":false,"pr":{"l":"Lib","i":11}},"html5data":{"xPos":-1,"yPos":-1,"width":505,"height":74,"strokewidth":3}}}],"width":504,"height":73,"resume":true,"useHandCursor":true,"id":"5o58Qz02OnY","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6dC9rUe1Qle.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6dC9rUe1Qle._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6dC9rUe1Qle"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6czAoBMPdUT.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6czAoBMPdUT._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6czAoBMPdUT"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5fbHvEI37Ky_556914783","id":"01","linkId":"txt__default_6czAoBMPdUT","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":461,"bottom":63,"pngfb":false,"pr":{"l":"Lib","i":15}}}],"shapemaskId":"","xPos":24,"yPos":155,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":252,"rotateYPos":36.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":504,"bottom":73,"altText":"الهيروغليفية","pngfb":false,"pr":{"l":"Lib","i":10}},"html5data":{"xPos":-1,"yPos":-1,"width":505,"height":74,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":505,"bottom":73,"altText":"الهيروغليفية","pngfb":false,"pr":{"l":"Lib","i":13}},"html5data":{"xPos":-1,"yPos":-1,"width":506,"height":74,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":504,"bottom":73,"altText":"الهيروغليفية","pngfb":false,"pr":{"l":"Lib","i":11}},"html5data":{"xPos":-1,"yPos":-1,"width":505,"height":74,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Review","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":505,"bottom":73,"altText":"الهيروغليفية","pngfb":false,"pr":{"l":"Lib","i":14}},"html5data":{"xPos":-1,"yPos":-1,"width":506,"height":74,"strokewidth":3}}}],"width":504,"height":73,"resume":true,"useHandCursor":true,"id":"6czAoBMPdUT","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_review","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5o58Qz02OnY.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5o58Qz02OnY._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5o58Qz02OnY"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6dC9rUe1Qle.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6dC9rUe1Qle._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6dC9rUe1Qle"}}]}]},"ActGrpSetReviewState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"shuffle":true,"accType":"none","accLabelType":"text","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":true,"useHandCursor":true,"id":""}],"shapemaskId":"","xPos":160,"yPos":216,"tabIndex":6,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":252,"rotateYPos":138,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":184,"yPos":216,"width":504,"height":275,"strokewidth":0}},"width":528,"height":275,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":528,"bottom":276,"altText":"Multiple Choice","pngfb":false,"pr":{"l":"Lib","i":6}}},"id":"6EDeATKzfTf"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6agMIc3Yxi5_108632291","id":"01","linkId":"txt__default_6agMIc3Yxi5","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":563,"bottom":70,"pngfb":false,"pr":{"l":"Lib","i":17}}}],"shapemaskId":"","xPos":112,"yPos":120,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":287,"rotateYPos":36.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":574,"bottom":73,"altText":"اسم نوب يكون باللغة","pngfb":false,"pr":{"l":"Lib","i":16}},"html5data":{"xPos":-1,"yPos":-1,"width":575,"height":74,"strokewidth":0}},"width":574,"height":73,"resume":true,"useHandCursor":true,"id":"6agMIc3Yxi5"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6WdxVjW6kbX_-1127950686","id":"01","linkId":"txt__default_6WdxVjW6kbX","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":311,"bottom":64,"pngfb":false,"pr":{"l":"Lib","i":19}}}],"shapemaskId":"","xPos":372,"yPos":26,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":160.5,"rotateYPos":34,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":321,"bottom":68,"altText":"اختر الإجابة الصحيحة","pngfb":false,"pr":{"l":"Lib","i":18}},"html5data":{"xPos":-1,"yPos":-1,"width":322,"height":69,"strokewidth":0}},"width":321,"height":68,"resume":true,"useHandCursor":true,"id":"6WdxVjW6kbX"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6EDeATKzfTf_CorrectReview","id":"01","linkId":"6EDeATKzfTf_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":386,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":21}}}],"shapemaskId":"","xPos":0,"yPos":600,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"صحيح","pngfb":false,"pr":{"l":"Lib","i":20}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6EDeATKzfTf_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6EDeATKzfTf_IncorrectReview","id":"01","linkId":"6EDeATKzfTf_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":377,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":23}}}],"shapemaskId":"","xPos":0,"yPos":600,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"خطأ","pngfb":false,"pr":{"l":"Lib","i":22}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6EDeATKzfTf_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');