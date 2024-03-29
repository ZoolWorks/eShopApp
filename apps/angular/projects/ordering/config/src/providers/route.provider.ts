import { eLayoutType, RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { eOrderingPolicyNames } from '../enums/policy-names';
import { eOrderingRouteNames } from '../enums/route-names';

export const ORDERING_ROUTE_PROVIDERS = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

export function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {
        path: '/ordering',
        name: eOrderingRouteNames.ordering,
        layout: eLayoutType.application,
        requiredPolicy: eOrderingPolicyNames.ordering,
        parentName: null,
        iconClass: 'bi bi-collection-fill',
      },
    ]);
  };
}
