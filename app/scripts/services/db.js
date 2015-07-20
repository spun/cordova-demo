/*global angular: false*/

var myDB = angular.module('smartBeach.db', []);

myDB.factory('DBService', ['$q', function ($q) {
    'use strict';

    return {
        db: null,

        init: function() {
            var def = $q.defer();
            try {
                if (window.sqlitePlugin) {
                    this.db = window.sqlitePlugin.openDatabase({name: 'my.db'}, function() {
                        def.resolve(true);
                    });
                } else {
                    def.reject();
                }
            } catch(e) {
                def.reject(e);
            }

            return def.promise;
        },

        query: function(query, bindings) {
            bindings = typeof bindings !== 'undefined' ? bindings : [];
            var deferred = $q.defer();

            this.db.transaction(function(transaction) {
                transaction.executeSql(query, bindings, function(transact, result) {
                    deferred.resolve(result);
                }, function(transact, error) {
                    deferred.reject(error);
                });
            });

            return deferred.promise;
        },

        fetchAll: function(result) {
            var output = [];

            for (var i = 0; i < result.rows.length; i++) {
                output.push(result.rows.item(i));
            }

            return output;
        },

        fetch: function(result) {
            return result.rows.item(0);
        },

        reset: function() {
            this.db.transaction(function(tx) {
                tx.executeSql('DROP TABLE IF EXISTS ARTICULOS');
                tx.executeSql('CREATE TABLE IF NOT EXISTS "ARTICULOS" ("ID_ARTICULO" integer primary key, "DESC_ARTICULO" text, "PRECIO" integer)');
                tx.executeSql('INSERT INTO "ARTICULOS" ("DESC_ARTICULO", "PRECIO") values ("Sombrilla", 4)');
                tx.executeSql('INSERT INTO "ARTICULOS" ("DESC_ARTICULO", "PRECIO") values ("Tumbona", 4)');
                tx.executeSql('INSERT INTO "ARTICULOS" ("DESC_ARTICULO", "PRECIO") values ("Butaca", 3)');
                tx.executeSql('INSERT INTO "ARTICULOS" ("DESC_ARTICULO", "PRECIO") values ("Toldo", 5)');


                tx.executeSql('DROP TABLE IF EXISTS ZONAS');
                tx.executeSql('CREATE TABLE IF NOT EXISTS "ZONAS" ("ID_ZONA" integer primary key, "DESC_ZONA" text)');
                tx.executeSql('INSERT INTO "ZONAS" ("DESC_ZONA") values ("Zona 1")');
                tx.executeSql('INSERT INTO "ZONAS" ("DESC_ZONA") values ("Zona 2")');
                tx.executeSql('INSERT INTO "ZONAS" ("DESC_ZONA") values ("Zona 3")');
                tx.executeSql('INSERT INTO "ZONAS" ("DESC_ZONA") values ("Zona 4")');


                tx.executeSql('DROP TABLE IF EXISTS PUESTOS');
                tx.executeSql('CREATE TABLE IF NOT EXISTS "PUESTOS" ("ID_PUESTO" integer primary key, "ZONA" integer, "FILA" integer, "COLUMNA")');
                for (var i = 0; i < 7; i++) {
                    for(var j = 0; j < 10; j++) {
                        tx.executeSql('INSERT INTO "PUESTOS" ("ZONA", "FILA", "COLUMNA") values (1, ' + i + ', ' + j + ')');
                    }
                }
            });
        }
    };
}])

.factory('Articulos', ['DBService', function(DBService) {
    'use strict';

    var self = this;

    self.all = function() {
        return DBService.query('SELECT * FROM ARTICULOS')
        .then(function(result){
            return DBService.fetchAll(result);
        });
    };

    return self;
}])

.factory('Zonas', ['DBService', function(DBService) {
    'use strict';

    var self = this;

    self.all = function() {
        return DBService.query('SELECT * FROM ZONAS')
        .then(function(result){
            return DBService.fetchAll(result);
        });
    };

    return self;
}])

.factory('Puestos', ['DBService', function(DBService) {
    'use strict';

    var self = this;

    self.all = function(zona) {
        return DBService.query('SELECT * FROM PUESTOS WHERE ZONA = ' + zona)
        .then(function(result){
            return DBService.fetchAll(result);
        });
    };

    return self;

}]);

