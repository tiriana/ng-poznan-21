export const name: string = 'Items';

import IResourceService = angular.resource.IResourceService;
import IResourceClass = angular.resource.IResourceClass;
import IResource = angular.resource.IResource;

export function resource($resource: IResourceService): IResourceClass<IResource<any>> {
    return $resource('/api/items/:id');
}

export default resource;
