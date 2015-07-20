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
    var ref;
    return (ref = this._model).val.apply(ref, arguments);
  };

  YList.prototype.ref = function() {
    var ref;
    return (ref = this._model).ref.apply(ref, arguments);
  };

  YList.prototype.observe = function() {
    var ref;
    (ref = this._model).observe.apply(ref, arguments);
    return this;
  };

  YList.prototype.unobserve = function() {
    var ref;
    (ref = this._model).unobserve.apply(ref, arguments);
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
