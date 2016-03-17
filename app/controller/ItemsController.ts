export const name: string = 'ItemsController';
import {default as ItemInterface} from "../model/Item";

export function controller($scope: any, itemsService): void {
    itemsService
        .all()
        .then(function(allItems: Array<ItemInterface>) {
        $scope.items = allItems;
    });
}

export default controller;
