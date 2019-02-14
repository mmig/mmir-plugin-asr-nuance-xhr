var _id = "mmir-plugin-asr-nuance-xhr";
var _paths = {
  "mmir-plugin-asr-nuance-xhr/webasrNuanceImpl": "www/webasrNuanceImpl.js",
  "mmir-plugin-asr-nuance-xhr": "www/webasrNuanceImpl.js"
};
var _workers = [];
var _exportedModules = [
  "mmir-plugin-asr-nuance-xhr"
];
var _dependencies = [
  "mmir-plugin-encoder-amr",
  "mmir-plugin-encoder-core"
];
function _join(source, target, dict){
  source.forEach(function(item){
    if(!dict[item]){
      dict[item] = true;
      target.push(item);
    }
  });
};
function _getAll(type, isResolve){

  var data = this[type];
  var isArray = Array.isArray(data);
  var result = isArray? [] : Object.assign({}, data);
  var dupl = result;
  if(isArray){
    dupl = {};
    _join(data, result, dupl);
  } else if(isResolve){
    var root = __dirname;
    Object.keys(result).forEach(function(field){
      result[field] = root + '/' + result[field];
    });
  }
  this.dependencies.forEach(function(dep){
    var depExports = require(dep + '/module-ids.js');
    var depData = depExports.getAll(type, isResolve);
    if(isArray){
      _join(depData, result, dupl);
    } else {
      Object.assign(result, depData)
    }
  });

  return result;
};
module.exports = {id: _id, paths: _paths, workers: _workers, modules: _exportedModules, dependencies: _dependencies, getAll: _getAll};