myMod.provider('greeting', function() {
  var text = 'Hello, ';

  this.setText = function(value) {
    text = value;
  };

  this.$get = function() {
    return function(name) {
      alert(text + name);
    };
  };
});

myMod.config(function(greetingProvider) {
  greetingProvider.setText("Howdy there, ");
});

myMod.run(function(greeting) {
  greeting('Ford Prefect');
});