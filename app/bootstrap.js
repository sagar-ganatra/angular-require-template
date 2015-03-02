define([
    'angular',
    'app',
    'jquery'
], function (ng, app, $) {
    'use strict';
    
    $(document).ready(function () {
        ng.bootstrap($('body'), ['todoApp']);
    });
});