// import { UsePopUpState } from "@app/hooks/usePopUp";
import { RolePermissionsTable2 } from "./RolePermissionsTable2";

type Props = {
  roleId: string;
  // handlePopUpOpen: (popUpName: keyof UsePopUpState<["rolePermission"]>, data?: {}) => void;
};

export const RolePermissionsSection = ({
  roleId
}: // handlePopUpOpen
Props) => {
  //   const { mutateAsync: deleteMutateAsync } = useDeleteIdentityFromWorkspace();

  // const { popUp, handlePopUpOpen, handlePopUpClose, handlePopUpToggle } = usePopUp([
  //   "addIdentityToProject",
  //   "removeIdentityFromProject"
  // ] as const);

  //   const onRemoveIdentitySubmit = async (id: string, projectId: string) => {
  //     try {
  //       await deleteMutateAsync({
  //         identityId: id,
  //         workspaceId: projectId
  //       });

  //       createNotification({
  //         text: "Successfully removed identity from project",
  //         type: "success"
  //       });

  //       handlePopUpClose("removeIdentityFromProject");
  //     } catch (err) {
  //       console.error(err);
  //       const error = err as any;
  //       const text = error?.response?.data?.message ?? "Failed to remove identity from project";

  //       createNotification({
  //         text,
  //         type: "error"
  //       });
  //     }
  //   };

  return (
    <div className="w-full rounded-lg border border-mineshaft-600 bg-mineshaft-900 p-4">
      <div className="flex items-center justify-between border-b border-mineshaft-400 pb-4">
        <h3 className="text-lg font-semibold text-mineshaft-100">Permissions</h3>
        {/* <IconButton
          ariaLabel="copy icon"
          variant="plain"
          className="group relative"
          onClick={() => handlePopUpOpen("rolePermission")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </IconButton> */}
      </div>
      <div className="py-4">
        {/* <RolePermissionsTable /> */}
        <RolePermissionsTable2 roleId={roleId} />
        {/* <IdentityProjectsTable identityId={identityId} handlePopUpOpen={handlePopUpOpen} /> */}
      </div>
      {/* <DeleteActionModal
        isOpen={popUp.removeIdentityFromProject.isOpen}
        title={`Are you sure want to remove ${
          (popUp?.removeIdentityFromProject?.data as { identityName: string })?.identityName || ""
        } from ${
          (popUp?.removeIdentityFromProject?.data as { projectName: string })?.projectName || ""
        }?`}
        onChange={(isOpen) => handlePopUpToggle("removeIdentityFromProject", isOpen)}
        deleteKey="confirm"
        onDeleteApproved={() => {
          const popupData = popUp?.removeIdentityFromProject?.data as {
            identityId: string;
            projectId: string;
          };

          return onRemoveIdentitySubmit(popupData.identityId, popupData.projectId);
        }}
      /> */}
      {/* <IdentityAddToProjectModal
        identityId={identityId}
        popUp={popUp}
        handlePopUpToggle={handlePopUpToggle}
      /> */}
    </div>
  );
};
