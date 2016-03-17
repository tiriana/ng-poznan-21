export const name: string = 'ItemsController';

export function controller($scope: any, itemsService): void {
    itemsService
        .all()
        .then(function(allItems) {
        $scope.items = allItems;
    });
}

export default controller;
