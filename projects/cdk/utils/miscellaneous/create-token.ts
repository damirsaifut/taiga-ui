import {InjectionToken} from '@angular/core';

export function tuiCreateToken<T>(defaults: T): InjectionToken<T> {
    return new InjectionToken<T>(``, {
        factory: () => defaults,
    });
}

export function tuiCreateTokenFromFactory<T>(factory: () => T): InjectionToken<T> {
    return new InjectionToken<T>(``, {factory});
}
