(function() {
    var PokeController =  function() {
        var vm = this;
        vm.pokemon = [{
            
            }];
            
        vm.deleteLast = function() {
            vm.films.splice(-1,1);
        };

    };
    pokemonapp.controller('PokeController', [PokeController]);
}());