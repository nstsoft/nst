type Props = {
  mobileImageSrc: string;
  webImageSrc: string;
  header: string;
  text: string;
  key: string;
};

export function RenderItem(props: Props) {
  return (
    <div className="item" key={props.key}>
      <div className="description">
        <div className="common-header">{props.header}</div>
        <div className="common-text">{props.text}</div>
      </div>
      <div className="images">
        <div className="phone">
          <div>
            <img src={props.mobileImageSrc} />
            <div></div>
          </div>
        </div>
        <div className="laptop-section">
          <div className="laptop">
            <div className="laptop__screen">
              <div className="laptop__frame"></div>
              <div className="laptop__display">
                <img src={props.webImageSrc} />
              </div>
            </div>
            <div className="laptop__controls">
              <div className="laptop__keyboard"></div>
              <div className="laptop__touchpad"></div>
            </div>
            <div className="laptop__depth"></div>
            <div className="laptop__shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
