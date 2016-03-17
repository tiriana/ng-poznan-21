/// <reference path="../../typings/tsd.d.ts" />

export const name: string = 'itemsService';

export function service($http: angular.IHttpService, $q): void {
    this.all = function(): Q.Promise<any> {
        var deferred = $q.defer();

        $http.get('/api/items', { params: { limit: 12, offset: Math.floor(Math.random() * 100) } })
            .success(function(data, status, headers, config) {
            deferred.resolve(data);
        });

        return deferred.promise;
    };
}

export default service;
