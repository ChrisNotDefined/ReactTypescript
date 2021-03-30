export interface TrackClickProps {
  renderProps(clicks: number): React.ReactElement;
}

export interface TrackClickState {
  click: number
}