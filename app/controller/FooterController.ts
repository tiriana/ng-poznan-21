export const name: string = 'FooterController';

export function controller($scope: angular.IScope, VERSION: string): void {
    (<any>$scope).VERSION = VERSION;
}

export default controller;
