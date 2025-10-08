import { CanDeactivateFn } from "@angular/router";
import { inject } from "@angular/core";
import { ConfirmService } from "../../features/shared/services/confirm.serivce";

export interface CanDeactivateComponent {
  get dirty(): boolean;
}

export const canDeactivateForm: CanDeactivateFn<CanDeactivateComponent> = (component) => {
<<<<<<< HEAD
  const confirmLeaveService = inject(ConfirmService);
=======
  const confirmService = inject(ConfirmService);
>>>>>>> 936adaf186c79057ed2c6fc37805da59bab88197

  if (!component.dirty) {
    return true;
  }

  return new Promise<boolean>(resolve => {
<<<<<<< HEAD
    confirmLeaveService.confirmBack(
=======
    confirmService.confirmBack(
>>>>>>> 936adaf186c79057ed2c6fc37805da59bab88197
      () => resolve(true)
    );
  });
};