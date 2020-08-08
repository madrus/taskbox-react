(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,state=_ref$task.state,onArchiveTask=_ref.onArchiveTask,onPinTask=_ref.onPinTask;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"list-item ".concat(state)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{className:"checkbox"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"checkbox",defaultChecked:"TASK_ARCHIVED"===state,disabled:!0,name:"checked"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"checkbox-custom",onClick:function onClick(){return onArchiveTask(id)}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"title"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",value:title,readOnly:!0,placeholder:"Input title",style:{textOverflow:"ellipsis"}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"actions",onClick:function onClick(event){return event.stopPropagation()}},"TASK_ARCHIVED"!==state&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{type:"button",className:"link-button",onClick:function onClick(){return onPinTask(id)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"icon-star"}))))}Task.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{type:{name:"shape",value:{id:{name:"string",required:!0},title:{name:"string",required:!0},state:{name:"string",required:!0}}},required:!1,description:""},onArchiveTask:{type:{name:"func"},required:!1,description:""},onPinTask:{type:{name:"func"},required:!1,description:""}}},__webpack_exports__.a=Task,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Task.js"]={name:"Task",docgenInfo:Task.__docgenInfo,path:"src/components/Task.js"})},109:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return PureTaskList}));var toConsumableArray=__webpack_require__(154),react=__webpack_require__(0),react_default=__webpack_require__.n(react),Task=__webpack_require__(108),es=__webpack_require__(127),objectSpread2=__webpack_require__(20),redux=__webpack_require__(203),actions_ARCHIVE_TASK="ARCHIVE_TASK",actions_PIN_TASK="PIN_TASK";function taskStateReducer(taskState){return function(state,action){return Object(objectSpread2.a)(Object(objectSpread2.a)({},state),{},{tasks:state.tasks.map((function(task){return task.id===action.id?Object(objectSpread2.a)(Object(objectSpread2.a)({},task),{},{state:taskState}):task}))})}}Object(redux.b)((function reducer(state,action){switch(action.type){case actions_ARCHIVE_TASK:return taskStateReducer("TASK_ARCHIVED")(state,action);case actions_PIN_TASK:return taskStateReducer("TASK_PINNED")(state,action);default:return state}}),{tasks:[{id:"1",title:"Something",state:"TASK_INBOX"},{id:"2",title:"Something more",state:"TASK_INBOX"},{id:"3",title:"Something else",state:"TASK_INBOX"},{id:"4",title:"Something again",state:"TASK_INBOX"}]});function PureTaskList(_ref){var loading=_ref.loading,tasks=_ref.tasks,onArchiveTask=_ref.onArchiveTask,events={onPinTask:_ref.onPinTask,onArchiveTask:onArchiveTask},LoadingRow=react_default.a.createElement("div",{className:"loading-item"},react_default.a.createElement("span",{className:"glow-checkbox"}),react_default.a.createElement("span",{className:"glow-text"},react_default.a.createElement("span",null,"Loading")," ",react_default.a.createElement("span",null,"cool")," ",react_default.a.createElement("span",null,"state")));if(loading)return react_default.a.createElement("div",{className:"list-items"},LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow);if(0===tasks.length)return react_default.a.createElement("div",{className:"list-items"},react_default.a.createElement("div",{className:"wrapper-message"},react_default.a.createElement("span",{className:"icon-check"}),react_default.a.createElement("div",{className:"title-message"},"You have no tasks"),react_default.a.createElement("div",{className:"subtitle-message"},"Sit back and relax")));var tasksInOrder=[].concat(Object(toConsumableArray.a)(tasks.filter((function(t){return"TASK_PINNED"===t.state}))),Object(toConsumableArray.a)(tasks.filter((function(t){return"TASK_PINNED"!==t.state}))));return react_default.a.createElement("div",{className:"list-items"},tasksInOrder.map((function(task){return react_default.a.createElement(Task.a,Object.assign({key:task.id,task:task},events))})))}PureTaskList.defaultProps={loading:!1},PureTaskList.__docgenInfo={description:"",methods:[],displayName:"PureTaskList",props:{loading:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},tasks:{type:{name:"arrayOf",value:{name:"custom",raw:"Task.propTypes.task"}},required:!0,description:""},onArchiveTask:{type:{name:"func"},required:!0,description:""},onPinTask:{type:{name:"func"},required:!0,description:""}}};__webpack_exports__.b=Object(es.b)((function(_ref2){return{tasks:_ref2.tasks.filter((function(t){return"TASK_INBOX"===t.state||"TASK_PINNED"===t.state}))}}),(function(dispatch){return{onArchiveTask:function onArchiveTask(id){return dispatch(function archiveTask(id){return{type:actions_ARCHIVE_TASK,id:id}}(id))},onPinTask:function onPinTask(id){return dispatch(function pinTask(id){return{type:actions_PIN_TASK,id:id}}(id))}}}))(PureTaskList);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TaskList.js"]={name:"PureTaskList",docgenInfo:PureTaskList.__docgenInfo,path:"src/components/TaskList.js"})},1268:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(90),req=(__webpack_require__(1291),__webpack_require__(1292));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(151)(module))},1291:function(module,exports,__webpack_require__){},1292:function(module,exports,__webpack_require__){var map={"./InboxScreen.stories.js":1293,"./Task.stories.js":54,"./TaskList.stories.js":293};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1292},1293:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(90),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(153),react_redux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(127),_InboxScreen__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(300),_TaskList_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(293),withSourceLoader=__webpack_require__(124).withSource,__STORY__=(__webpack_require__(124).addSource,"import React from 'react'\nimport { storiesOf } from '@storybook/react'\nimport { action } from '@storybook/addon-actions'\nimport { Provider } from 'react-redux'\n\nimport { PureInboxScreen } from './InboxScreen'\nimport { defaultTasks } from './TaskList.stories'\n\n// A super-simple mock of a redux store\nconst store = {\n  getState: () => {\n    return {\n      tasks: defaultTasks,\n    }\n  },\n  subscribe: () => 0,\n  dispatch: action('dispatch'),\n}\n\nstoriesOf('InboxScreen', module)\n  .addDecorator(story => <Provider store={store}>{story()}</Provider>)\n  .add('default', () => <PureInboxScreen />)\n  .add('error', () => <PureInboxScreen error='Some error has occurred' />)\n"),__ADDS_MAP__={"inboxscreen--error":{startLoc:{col:7,line:23},endLoc:{col:73,line:23},startBody:{col:16,line:23},endBody:{col:73,line:23}},"inboxscreen--default":{startLoc:{col:7,line:22},endLoc:{col:43,line:22},startBody:{col:18,line:22},endBody:{col:43,line:22}}},store={getState:function getState(){return{tasks:_TaskList_stories__WEBPACK_IMPORTED_MODULE_5__.defaultTasks}},subscribe:function subscribe(){return 0},dispatch:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("dispatch")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("InboxScreen",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/InboxScreen.stories.js",[],{},"/Users/madrus/dev/storybook/react/taskbox/src/components",{})).addDecorator((function(story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.a,{store:store},story())})).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InboxScreen__WEBPACK_IMPORTED_MODULE_4__.a,null)})).add("error",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InboxScreen__WEBPACK_IMPORTED_MODULE_4__.a,{error:"Some error has occurred"})}))}.call(this,__webpack_require__(151)(module))},293:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"defaultTasks",(function(){return defaultTasks})),__webpack_require__.d(__webpack_exports__,"withPinnedTasks",(function(){return withPinnedTasks}));var _Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(154),_Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(90),_TaskList__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(109),_Task_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(54),withSourceLoader=__webpack_require__(124).withSource,__STORY__=(__webpack_require__(124).addSource,"import React from 'react'\nimport { storiesOf } from '@storybook/react'\n\nimport { PureTaskList } from './TaskList'\nimport { task, actions } from './Task.stories'\n\nexport const defaultTasks = [\n  { ...task, id: '1', title: 'Task 1' },\n  { ...task, id: '2', title: 'Task 2' },\n  { ...task, id: '3', title: 'Task 3' },\n  { ...task, id: '4', title: 'Task 4' },\n  { ...task, id: '5', title: 'Task 5' },\n  { ...task, id: '6', title: 'Task 6' },\n]\n\nexport const withPinnedTasks = [\n  ...defaultTasks.slice(0, 5),\n  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },\n]\n\nstoriesOf('TaskList', module)\n  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)\n  .add('default', () => <PureTaskList tasks={defaultTasks} {...actions} />)\n  .add('withPinnedTasks', () => (\n    <PureTaskList tasks={withPinnedTasks} {...actions} />\n  ))\n  .add('loading', () => <PureTaskList loading tasks={[]} {...actions} />)\n  .add('empty', () => <PureTaskList tasks={[]} {...actions} />)\n"),__ADDS_MAP__={"tasklist--empty":{startLoc:{col:7,line:28},endLoc:{col:62,line:28},startBody:{col:16,line:28},endBody:{col:62,line:28}},"tasklist--loading":{startLoc:{col:7,line:27},endLoc:{col:72,line:27},startBody:{col:18,line:27},endBody:{col:72,line:27}},"tasklist--withpinnedtasks":{startLoc:{col:7,line:24},endLoc:{col:3,line:26},startBody:{col:26,line:24},endBody:{col:3,line:26}},"tasklist--default":{startLoc:{col:7,line:23},endLoc:{col:74,line:23},startBody:{col:18,line:23},endBody:{col:74,line:23}}},defaultTasks=[Object(_Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task),{},{id:"1",title:"Task 1"}),Object(_Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task),{},{id:"2",title:"Task 2"}),Object(_Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task),{},{id:"3",title:"Task 3"}),Object(_Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task),{},{id:"4",title:"Task 4"}),Object(_Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task),{},{id:"5",title:"Task 5"}),Object(_Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task),{},{id:"6",title:"Task 6"})],withPinnedTasks=[].concat(Object(_Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(defaultTasks.slice(0,5)),[{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("TaskList",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/TaskList.stories.js",[],{},"/Users/madrus/dev/storybook/react/taskbox/src/components",{})).addDecorator((function(story){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{style:{padding:"3rem"}},story())})).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({tasks:defaultTasks},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions))})).add("withPinnedTasks",(function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({tasks:withPinnedTasks},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions))})).add("loading",(function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({loading:!0,tasks:[]},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions))})).add("empty",(function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({tasks:[]},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions))}))}.call(this,__webpack_require__(151)(module))},300:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return PureInboxScreen}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(127),_TaskList__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(109);function PureInboxScreen(_ref){return _ref.error?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"page lists-show"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"wrapper-message"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"icon-face-sad"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"title-message"},"Oh no!"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"subtitle-message"},"Something went wrong"))):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"page lists-show"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:"title-page"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"title-wrapper"},"Taskbox"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_2__.b,null))}PureInboxScreen.defaultProps={error:null},PureInboxScreen.__docgenInfo={description:"",methods:[],displayName:"PureInboxScreen",props:{error:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""}}};Object(react_redux__WEBPACK_IMPORTED_MODULE_1__.b)((function(_ref2){return{error:_ref2.error}}))(PureInboxScreen);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InboxScreen.js"]={name:"PureInboxScreen",docgenInfo:PureInboxScreen.__docgenInfo,path:"src/components/InboxScreen.js"})},466:function(module,exports,__webpack_require__){__webpack_require__(467),__webpack_require__(614),__webpack_require__(615),__webpack_require__(1267),module.exports=__webpack_require__(1268)},531:function(module,exports){},54:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"task",(function(){return task})),__webpack_require__.d(__webpack_exports__,"actions",(function(){return actions}));var _Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(90),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(153),_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(301),_Task__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(108),withSourceLoader=__webpack_require__(124).withSource,__STORY__=(__webpack_require__(124).addSource,"import React from 'react'\nimport { storiesOf } from '@storybook/react'\nimport { action } from '@storybook/addon-actions'\nimport { withKnobs, object } from '@storybook/addon-knobs/react'\n\nimport Task from './Task'\n\nexport const task = {\n  id: '1',\n  title: 'Test Task',\n  state: 'TASK_INBOX',\n  updatedAt: new Date(2019, 0, 6, 1, 3),\n}\n\nexport const actions = {\n  onPinTask: action('onPinTask'),\n  onArchiveTask: action('onArchiveTask'),\n}\n\nconst longTitle = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not`\n\nstoriesOf('Task', module)\n  .addDecorator(withKnobs)\n  .add('default', () => {\n    return <Task task={object('task', { ...task })} {...actions} />\n  })\n  .add('pinned', () => (\n    <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />\n  ))\n  .add('archived', () => (\n    <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />\n  ))\n  .add('long title', () => (\n    <Task task={{ ...task, title: longTitle }} {...actions} />\n  ))\n"),__ADDS_MAP__={"task--long-title":{startLoc:{col:7,line:33},endLoc:{col:3,line:35},startBody:{col:21,line:33},endBody:{col:3,line:35}},"task--archived":{startLoc:{col:7,line:30},endLoc:{col:3,line:32},startBody:{col:19,line:30},endBody:{col:3,line:32}},"task--pinned":{startLoc:{col:7,line:27},endLoc:{col:3,line:29},startBody:{col:17,line:27},endBody:{col:3,line:29}},"task--default":{startLoc:{col:7,line:24},endLoc:{col:3,line:26},startBody:{col:18,line:24},endBody:{col:3,line:26}}},task={id:"1",title:"Test Task",state:"TASK_INBOX",updatedAt:new Date(2019,0,6,1,3)},actions={onPinTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("onPinTask"),onArchiveTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("onArchiveTask")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Task",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/Task.stories.js",[],{},"/Users/madrus/dev/storybook/react/taskbox/src/components",{})).addDecorator(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__.withKnobs).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_5__.a,Object.assign({task:Object(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__.object)("task",Object(_Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},task))},actions))})).add("pinned",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_5__.a,Object.assign({task:Object(_Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},task),{},{state:"TASK_PINNED"})},actions))})).add("archived",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_5__.a,Object.assign({task:Object(_Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},task),{},{state:"TASK_ARCHIVED"})},actions))})).add("long title",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_5__.a,Object.assign({task:Object(_Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_madrus_dev_storybook_react_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},task),{},{title:"This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not"})},actions))}))}.call(this,__webpack_require__(151)(module))}},[[466,1,2]]]);
//# sourceMappingURL=main.b372344853864c5b4513.bundle.js.map