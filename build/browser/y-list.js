(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var YList;

YList = (function() {
  function YList(list) {
    if (list == null) {
      this._list = [];
    } else if (list.constructor === Array) {
      this._list = list;
    } else {
      throw new Error("Y.List expects an Array as a parameter");
    }
  }

  YList.prototype._name = "List";

  YList.prototype._getModel = function(types, ops) {
    if (this._model == null) {
      this._model = new ops.ListManager(this).execute();
      this._model.insert(0, this._list);
    }
    delete this._list;
    return this._model;
  };

  YList.prototype._setModel = function(_model) {
    this._model = _model;
    return delete this._list;
  };

  YList.prototype.val = function() {
    var _ref;
    return (_ref = this._model).val.apply(_ref, arguments);
  };

  YList.prototype.ref = function() {
    var _ref;
    return (_ref = this._model).ref.apply(_ref, arguments);
  };

  YList.prototype.observe = function() {
    var _ref;
    (_ref = this._model).observe.apply(_ref, arguments);
    return this;
  };

  YList.prototype.unobserve = function() {
    var _ref;
    (_ref = this._model).unobserve.apply(_ref, arguments);
    return this;
  };

  YList.prototype.insert = function(position, content) {
    return this.insertContents(position, [content]);
  };

  YList.prototype.insertContents = function(position, contents) {
    if (typeof position !== "number") {
      throw new Error("Y.List.insert expects a Number as the first parameter!");
    }
    this._model.insert(position, contents);
    return this;
  };

  YList.prototype["delete"] = function(position, length) {
    this._model["delete"](position, length);
    return this;
  };

  YList.prototype.push = function(content) {
    this._model.push(content);
    return this;
  };

  YList.prototype.getLength = function() {
    return this._model.getLength();
  };

  return YList;

})();

if (typeof window !== "undefined" && window !== null) {
  if (window.Y != null) {
    window.Y.List = YList;
  } else {
    throw new Error("You must first import Y!");
  }
}

if (typeof module !== "undefined" && module !== null) {
  module.exports = YList;
}


},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NjYy9Eb2N1bWVudHMvcHJvZy9MaW5hZ29yYS95LWxpc3Qvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUvY2NjL0RvY3VtZW50cy9wcm9nL0xpbmFnb3JhL3ktbGlzdC9saWIveS1saXN0LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUEsS0FBQTs7QUFBQTtBQUtlLEVBQUEsZUFBQyxJQUFELEdBQUE7QUFDWCxJQUFBLElBQU8sWUFBUDtBQUNFLE1BQUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxFQUFULENBREY7S0FBQSxNQUVLLElBQUcsSUFBSSxDQUFDLFdBQUwsS0FBb0IsS0FBdkI7QUFDSCxNQUFBLElBQUMsQ0FBQSxLQUFELEdBQVMsSUFBVCxDQURHO0tBQUEsTUFBQTtBQUdILFlBQVUsSUFBQSxLQUFBLENBQU0sd0NBQU4sQ0FBVixDQUhHO0tBSE07RUFBQSxDQUFiOztBQUFBLGtCQVFBLEtBQUEsR0FBTyxNQVJQLENBQUE7O0FBQUEsa0JBVUEsU0FBQSxHQUFXLFNBQUMsS0FBRCxFQUFRLEdBQVIsR0FBQTtBQUNULElBQUEsSUFBTyxtQkFBUDtBQUNFLE1BQUEsSUFBQyxDQUFBLE1BQUQsR0FBYyxJQUFBLEdBQUcsQ0FBQyxXQUFKLENBQWdCLElBQWhCLENBQWtCLENBQUMsT0FBbkIsQ0FBQSxDQUFkLENBQUE7QUFBQSxNQUNBLElBQUMsQ0FBQSxNQUFNLENBQUMsTUFBUixDQUFlLENBQWYsRUFBa0IsSUFBQyxDQUFBLEtBQW5CLENBREEsQ0FERjtLQUFBO0FBQUEsSUFHQSxNQUFBLENBQUEsSUFBUSxDQUFBLEtBSFIsQ0FBQTtXQUtBLElBQUMsQ0FBQSxPQU5RO0VBQUEsQ0FWWCxDQUFBOztBQUFBLGtCQWtCQSxTQUFBLEdBQVcsU0FBRSxNQUFGLEdBQUE7QUFDVCxJQURVLElBQUMsQ0FBQSxTQUFBLE1BQ1gsQ0FBQTtXQUFBLE1BQUEsQ0FBQSxJQUFRLENBQUEsTUFEQztFQUFBLENBbEJYLENBQUE7O0FBQUEsa0JBcUJBLEdBQUEsR0FBSyxTQUFBLEdBQUE7QUFDSCxRQUFBLElBQUE7V0FBQSxRQUFBLElBQUMsQ0FBQSxNQUFELENBQU8sQ0FBQyxHQUFSLGFBQVksU0FBWixFQURHO0VBQUEsQ0FyQkwsQ0FBQTs7QUFBQSxrQkF3QkEsR0FBQSxHQUFLLFNBQUEsR0FBQTtBQUNILFFBQUEsSUFBQTtXQUFBLFFBQUEsSUFBQyxDQUFBLE1BQUQsQ0FBTyxDQUFDLEdBQVIsYUFBWSxTQUFaLEVBREc7RUFBQSxDQXhCTCxDQUFBOztBQUFBLGtCQTRCQSxPQUFBLEdBQVMsU0FBQSxHQUFBO0FBQ1AsUUFBQSxJQUFBO0FBQUEsSUFBQSxRQUFBLElBQUMsQ0FBQSxNQUFELENBQU8sQ0FBQyxPQUFSLGFBQWdCLFNBQWhCLENBQUEsQ0FBQTtXQUNBLEtBRk87RUFBQSxDQTVCVCxDQUFBOztBQUFBLGtCQWdDQSxTQUFBLEdBQVcsU0FBQSxHQUFBO0FBQ1QsUUFBQSxJQUFBO0FBQUEsSUFBQSxRQUFBLElBQUMsQ0FBQSxNQUFELENBQU8sQ0FBQyxTQUFSLGFBQWtCLFNBQWxCLENBQUEsQ0FBQTtXQUNBLEtBRlM7RUFBQSxDQWhDWCxDQUFBOztBQUFBLGtCQXlDQSxNQUFBLEdBQVEsU0FBQyxRQUFELEVBQVcsT0FBWCxHQUFBO1dBQ04sSUFBQyxDQUFBLGNBQUQsQ0FBZ0IsUUFBaEIsRUFBMEIsQ0FBQyxPQUFELENBQTFCLEVBRE07RUFBQSxDQXpDUixDQUFBOztBQUFBLGtCQTRDQSxjQUFBLEdBQWdCLFNBQUMsUUFBRCxFQUFXLFFBQVgsR0FBQTtBQUNkLElBQUEsSUFBRyxNQUFBLENBQUEsUUFBQSxLQUFxQixRQUF4QjtBQUNFLFlBQVUsSUFBQSxLQUFBLENBQU0sd0RBQU4sQ0FBVixDQURGO0tBQUE7QUFBQSxJQUdBLElBQUMsQ0FBQSxNQUFNLENBQUMsTUFBUixDQUFlLFFBQWYsRUFBeUIsUUFBekIsQ0FIQSxDQUFBO1dBSUEsS0FMYztFQUFBLENBNUNoQixDQUFBOztBQUFBLGtCQW1EQSxTQUFBLEdBQVEsU0FBQyxRQUFELEVBQVcsTUFBWCxHQUFBO0FBQ04sSUFBQSxJQUFDLENBQUEsTUFBTSxDQUFDLFFBQUQsQ0FBUCxDQUFlLFFBQWYsRUFBeUIsTUFBekIsQ0FBQSxDQUFBO1dBQ0EsS0FGTTtFQUFBLENBbkRSLENBQUE7O0FBQUEsa0JBdURBLElBQUEsR0FBTSxTQUFDLE9BQUQsR0FBQTtBQUNKLElBQUEsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsT0FBYixDQUFBLENBQUE7V0FDQSxLQUZJO0VBQUEsQ0F2RE4sQ0FBQTs7QUFBQSxrQkEyREEsU0FBQSxHQUFXLFNBQUEsR0FBQTtXQUNULElBQUMsQ0FBQSxNQUFNLENBQUMsU0FBUixDQUFBLEVBRFM7RUFBQSxDQTNEWCxDQUFBOztlQUFBOztJQUxGLENBQUE7O0FBbUVBLElBQUcsZ0RBQUg7QUFDRSxFQUFBLElBQUcsZ0JBQUg7QUFDRSxJQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBVCxHQUFnQixLQUFoQixDQURGO0dBQUEsTUFBQTtBQUdFLFVBQVUsSUFBQSxLQUFBLENBQU0sMEJBQU4sQ0FBVixDQUhGO0dBREY7Q0FuRUE7O0FBeUVBLElBQUcsZ0RBQUg7QUFDRSxFQUFBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLEtBQWpCLENBREY7Q0F6RUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgWUxpc3RcbiAgI1xuICAjIEBwcml2YXRlXG4gICMgQHBhcmFtIHtPYmplY3R9IHVpZCBBIHVuaXF1ZSBpZGVudGlmaWVyLiBJZiB1aWQgaXMgdW5kZWZpbmVkLCBhIG5ldyB1aWQgd2lsbCBiZSBjcmVhdGVkLlxuICAjXG4gIGNvbnN0cnVjdG9yOiAobGlzdCktPlxuICAgIGlmIG5vdCBsaXN0P1xuICAgICAgQF9saXN0ID0gW11cbiAgICBlbHNlIGlmIGxpc3QuY29uc3RydWN0b3IgaXMgQXJyYXlcbiAgICAgIEBfbGlzdCA9IGxpc3RcbiAgICBlbHNlXG4gICAgICB0aHJvdyBuZXcgRXJyb3IgXCJZLkxpc3QgZXhwZWN0cyBhbiBBcnJheSBhcyBhIHBhcmFtZXRlclwiXG5cbiAgX25hbWU6IFwiTGlzdFwiXG5cbiAgX2dldE1vZGVsOiAodHlwZXMsIG9wcyktPlxuICAgIGlmIG5vdCBAX21vZGVsP1xuICAgICAgQF9tb2RlbCA9IG5ldyBvcHMuTGlzdE1hbmFnZXIoQCkuZXhlY3V0ZSgpXG4gICAgICBAX21vZGVsLmluc2VydCAwLCBAX2xpc3RcbiAgICBkZWxldGUgQF9saXN0XG5cbiAgICBAX21vZGVsXG5cbiAgX3NldE1vZGVsOiAoQF9tb2RlbCktPlxuICAgIGRlbGV0ZSBAX2xpc3RcblxuICB2YWw6ICgpLT5cbiAgICBAX21vZGVsLnZhbCBhcmd1bWVudHMuLi5cblxuICByZWY6ICgpLT5cbiAgICBAX21vZGVsLnJlZiBhcmd1bWVudHMuLi5cblxuXG4gIG9ic2VydmU6ICgpLT5cbiAgICBAX21vZGVsLm9ic2VydmUgYXJndW1lbnRzLi4uXG4gICAgQFxuXG4gIHVub2JzZXJ2ZTogKCktPlxuICAgIEBfbW9kZWwudW5vYnNlcnZlIGFyZ3VtZW50cy4uLlxuICAgIEBcblxuICAjXG4gICMgSW5zZXJ0cyBhbiBPYmplY3QgaW50byB0aGUgbGlzdC5cbiAgI1xuICAjIEByZXR1cm4ge0xpc3RNYW5hZ2VyIFR5cGV9IFRoaXMgU3RyaW5nIG9iamVjdC5cbiAgI1xuICBpbnNlcnQ6IChwb3NpdGlvbiwgY29udGVudCktPlxuICAgIEBpbnNlcnRDb250ZW50cyBwb3NpdGlvbiwgW2NvbnRlbnRdXG5cbiAgaW5zZXJ0Q29udGVudHM6IChwb3NpdGlvbiwgY29udGVudHMpLT5cbiAgICBpZiB0eXBlb2YgcG9zaXRpb24gaXNudCBcIm51bWJlclwiXG4gICAgICB0aHJvdyBuZXcgRXJyb3IgXCJZLkxpc3QuaW5zZXJ0IGV4cGVjdHMgYSBOdW1iZXIgYXMgdGhlIGZpcnN0IHBhcmFtZXRlciFcIlxuXG4gICAgQF9tb2RlbC5pbnNlcnQgcG9zaXRpb24sIGNvbnRlbnRzXG4gICAgQFxuXG4gIGRlbGV0ZTogKHBvc2l0aW9uLCBsZW5ndGgpLT5cbiAgICBAX21vZGVsLmRlbGV0ZSBwb3NpdGlvbiwgbGVuZ3RoXG4gICAgQFxuXG4gIHB1c2g6IChjb250ZW50KS0+XG4gICAgQF9tb2RlbC5wdXNoIGNvbnRlbnRcbiAgICBAXG5cbiAgZ2V0TGVuZ3RoOiAoKSAtPlxuICAgIEBfbW9kZWwuZ2V0TGVuZ3RoKClcblxuaWYgd2luZG93P1xuICBpZiB3aW5kb3cuWT9cbiAgICB3aW5kb3cuWS5MaXN0ID0gWUxpc3RcbiAgZWxzZVxuICAgIHRocm93IG5ldyBFcnJvciBcIllvdSBtdXN0IGZpcnN0IGltcG9ydCBZIVwiXG5cbmlmIG1vZHVsZT9cbiAgbW9kdWxlLmV4cG9ydHMgPSBZTGlzdFxuIl19
