/**
 * MCP tool name → CLI command aliases.
 * Allows running `tv tv_health_check` as equivalent to `tv status`, etc.
 */
import { alias } from './router.js';

// health.js
alias('tv_health_check',            'status');
alias('tv_launch',                  'launch');

// chart.js
alias('chart_get_state',            'state');
alias('chart_set_symbol',           'symbol');
alias('chart_set_timeframe',        'timeframe');
alias('chart_set_type',             'type');
alias('chart_get_visible_range',    'range');
alias('chart_set_visible_range',    'range');      // same CLI, --from/--to triggers set
alias('chart_scroll_to_date',       'scroll');
alias('chart_manage_indicator',     'indicator');   // flat; use with add/remove sub
alias('symbol_info',                'info');
alias('symbol_search',              'search');
alias('tv_discover',                'discover');
alias('tv_ui_state',                'ui-state');

// data.js
alias('quote_get',                  'quote');
alias('data_get_ohlcv',            'ohlcv');
alias('data_get_study_values',     'values');
alias('data_get_pine_lines',       'data',  'lines');
alias('data_get_pine_labels',      'data',  'labels');
alias('data_get_pine_tables',      'data',  'tables');
alias('data_get_pine_boxes',       'data',  'boxes');
alias('data_get_strategy_results', 'data',  'strategy');
alias('data_get_trades',           'data',  'trades');
alias('data_get_equity',           'data',  'equity');
alias('data_get_indicator',        'data',  'indicator');
alias('depth_get',                 'data',  'depth');

// pine.js
alias('pine_get_source',           'pine',  'get');
alias('pine_set_source',           'pine',  'set');
alias('pine_smart_compile',        'pine',  'compile');
alias('pine_compile',              'pine',  'raw-compile');
alias('pine_analyze',              'pine',  'analyze');
alias('pine_check',                'pine',  'check');
alias('pine_save',                 'pine',  'save');
alias('pine_new',                  'pine',  'new');
alias('pine_open',                 'pine',  'open');
alias('pine_list_scripts',         'pine',  'list');
alias('pine_get_errors',           'pine',  'errors');
alias('pine_get_console',          'pine',  'console');

// capture.js
alias('capture_screenshot',        'screenshot');

// replay.js
alias('replay_start',             'replay', 'start');
alias('replay_step',              'replay', 'step');
alias('replay_stop',              'replay', 'stop');
alias('replay_status',            'replay', 'status');
alias('replay_autoplay',          'replay', 'autoplay');
alias('replay_trade',             'replay', 'trade');

// drawing.js
alias('draw_shape',               'draw',  'shape');
alias('draw_list',                'draw',  'list');
alias('draw_get_properties',      'draw',  'get');
alias('draw_remove_one',          'draw',  'remove');
alias('draw_clear',               'draw',  'clear');

// alerts.js
alias('alert_create',             'alert', 'create');
alias('alert_list',               'alert', 'list');
alias('alert_delete',             'alert', 'delete');

// watchlist.js
alias('watchlist_get',            'watchlist', 'get');
alias('watchlist_add',            'watchlist', 'add');

// ui.js (layout tools registered as MCP tools in ui.js)
alias('layout_list',              'layout', 'list');
alias('layout_switch',            'layout', 'switch');
alias('ui_click',                 'ui',    'click');
alias('ui_open_panel',            'ui',    'panel');
alias('ui_fullscreen',            'ui',    'fullscreen');
alias('ui_keyboard',              'ui',    'keyboard');
alias('ui_type_text',             'ui',    'type');
alias('ui_hover',                 'ui',    'hover');
alias('ui_scroll',                'ui',    'scroll');
alias('ui_mouse_click',           'ui',    'mouse');
alias('ui_find_element',          'ui',    'find');
alias('ui_evaluate',              'ui',    'eval');

// indicators.js
alias('indicator_set_inputs',          'indicator', 'set');
alias('indicator_toggle_visibility',   'indicator', 'toggle');

// pane.js
alias('pane_list',                'pane',  'list');
alias('pane_set_layout',          'pane',  'layout');
alias('pane_focus',               'pane',  'focus');
alias('pane_set_symbol',          'pane',  'symbol');

// tab.js
alias('tab_list',                 'tab',   'list');
alias('tab_new',                  'tab',   'new');
alias('tab_close',                'tab',   'close');
alias('tab_switch',               'tab',   'switch');

// morning.js
alias('morning_brief',            'brief');
alias('session_save',             'session', 'save');
alias('session_get',              'session', 'get');

// batch.js (no direct CLI command — alias to ohlcv or handled separately)
alias('batch_run',                'ohlcv');  // closest match; batch is MCP-only
