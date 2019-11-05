export interface StateProps {
    recipeListing: any;
  }
  export interface DispatchProps {
    requestMockData: () => void;
  }

  export interface ComponentProps extends DispatchProps,StateProps{}