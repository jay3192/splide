import { Splide } from '../../core/Splide/Splide';
import { BaseComponent, Components, Options } from '../../types';
/**
 * The interface for the Move component.
 *
 * @since 3.0.0
 */
export interface MoveComponent extends BaseComponent {
    move(dest: number, index: number, prev: number): void;
    jump(index: number): void;
    translate(position: number): void;
    cancel(): void;
    toIndex(position: number): number;
    toPosition(index: number, trimming?: boolean): number;
    getPosition(): number;
    getLimit(max: boolean): number;
    isBusy(): boolean;
    isExceeded(): boolean;
    isExceededMin(position: number, offset?: number): boolean;
    isExceededMax(position: number, offset?: number): boolean;
}
/**
 * The component for moving the slider.
 *
 * @since 3.0.0
 *
 * @param Splide     - A Splide instance.
 * @param Components - A collection of components.
 * @param options    - Options.
 *
 * @return A Move component object.
 */
export declare function Move(Splide: Splide, Components: Components, options: Options): MoveComponent;
//# sourceMappingURL=../../../../src/js/components/Move/Move.d.ts.map