// Generated by CoffeeScript 1.8.0
(function() {
  (function(factory) {
    if (typeof exports === "object") {
      factory(require("jquery"));
    } else if (typeof define === "function" && define.amd) {
      define(["jquery"], factory);
    } else {
      factory(jQuery);
    }
  })(function($) {
    var uuid;
    uuid = 0;
    $.fn.once = function(id) {
      var name;
      name = "jquery-once-" + (id || ++uuid);
      return this.filter(function() {
        return $(this).data(name) !== true;
      }).data(name, true);
    };
    $.fn.removeOnce = function(id) {
      return this.findOnce(id).removeData("jquery-once-" + id);
    };
    $.fn.findOnce = function(id) {
      var name;
      name = "jquery-once-" + id;
      return this.filter(function() {
        return $(this).data(name) === true;
      });
    };
  });

}).call(this);
