import { Component } from "react";
import "./index.css";
class Digitaltimer extends Component {
  state = { timelimit: 0, cundown: 0, coundownruning: false };
  timelimiteincrese = () => {
    this.setState((prevState) => {
      return {
        timelimit: prevState.timelimit + 1,
        cundown: prevState.cundown + 1,
      };
    });
  };
  timelimitedecrese = () => {
    this.setState((prevState) => {
      if (prevState.timelimit > 0) {
        return {
          timelimit: prevState.timelimit - 1,
          cundown: prevState.cundown - 1,
        };
      } else {
        return { timelimit: 0 }; // Don't go below zero
      }
    });
  };
  resetcount = () => {
    this.setState({ cundown: 0 });
  };

  changestatus = () => {
    let { coundownruning } = this.state;
    this.setState((prevState) => {
      return { coundownruning: !prevState.coundownruning };
    });
    if (!coundownruning) {
      // Start countdown
      this.intervalId = setInterval(() => {
        this.setState((prevState) => {
          if (prevState.cundown > 0) {
            return { cundown: prevState.cundown - 1 };
          } else {
            clearInterval(this.intervalId); // Stop when countdown reaches 0
            return { coundownruning: false }; // Automatically pause when 0 is reached
          }
        });
      }, 1000);
    } else {
      // Pause countdown
      clearInterval(this.intervalId);
    }
  };

  render() {
    let { timelimit, cundown, coundownruning } = this.state;

    return (
      <div className="digitaltimer">
        <h1>Digital Timer</h1>
        <div className="timedisplay">
          <div className="displaytime">
            <div className="bagroundimage">
              <p>{cundown}</p>
              <p>{coundownruning ? "Runing" : "parse"}</p>
            </div>
          </div>
          <div className="setdetail">
            <div className="pauseandreset">
              <div className="pausediv">
                <img
                  src={
                    coundownruning
                      ? "https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                      : "https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                  }
                  alt="icon"
                  onClick={this.changestatus}
                />
                <p>{coundownruning ? "purse" : "start"}</p>
              </div>
              <div className="resetdiv">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="icon"
                  onClick={this.resetcount}
                />
                <p>Reset</p>
              </div>
            </div>
            <p>Set Time Limit</p>
            <div className="timelimit">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8BAQGQkJCRkZH8/PwEBATi4uLr6+uHh4dZWVmEhIS1tbWioqKVlZVDQ0OysrLAwMC/v790dHRvb28cHBw5OTno6OhTU1NcXFxGRkZOTk4fHx+lpaXZ2dk3NzecnJz8LEaDAAADdElEQVR4nO3d61abQBRA4cEMhNwIUWPUan3/t+wMpt5CwMgZz4G1P9dq/ZXOXkNIKAw4BwAAAAAAAAAAAAAATnl//Dv+eN2xJOHP/D4h81W5qPb7Q7maaw9FXpiz+j57t6i1RyQrvOmKh9CVf2isnqe0qXq3Dnn5p8Ise9IelhQfLLMToXY5kVkMm2h5Gti40h6bDO+22Zfts5nDsNVmK+3BifDzMzMY3WmPTsR1R+HNFN6Kxdm8uOkWY09sdjOnb8J3pfYIhwqFtx19WXarPcKhvC/adqQfFNpDHMi7unMKs2ynPcSBmu9rndbaQxxs1lM40x7gYFc9heP/5kYhhfZRSKF9FFJoH4UU2kchhfZRSKF9FFJoH4UU2kchhfZRSKF9FFJoH4UU2kchhfb1XTFkrjBel37RFaHdc5hfUOhf1xOldvG/sOmZw02KUQ5T1Our79s89szh42b2TeHF1nXSizXj1lmU3RfEpvenjJFJNtbwovOui9J/z3WiK/y9W2Vxs+q84je9ZgAJ1mn4jpUvvy7JgqIQuNSevQ9y+Wv8vXuKi8+MiAMRX/n2rF11Qnr94oN20Gdhe6pkC2tDb8JGGI7sQtt7a4XBQjJwnhnaz7yRWxHerJE0Jxf93DfzYf/JUrBwoR3TSu6N6F2lHdOqEit0bq8d0+qvYOH05/CgHdPqIFjYck8EdbnovnSlndNqK1jYddMAPYJ3ufEmPxAlv5f2r1fWIHhs4Y+f+Ya+e8sfH8Z7P1g6usjFj/Hj/9NYkmdr6RuieWOficsUZ2nMHELlsgdObywdB2+T3LMvvOTdzcVj6ds9/WT3dXOX8DRisZQ993R5322Z9gRbjNyJnj88bL7/YrOXXXNqLeFtJX+w/+o7B/yzO39YuvXS9K/FoJBC+yik0D4KKbSPQgrto5BC+yik0D4KKbSPQgrto5BC+yik0D4KKbSPQgrto3D8haO7L8bFpj+H0y9Mc9WXHf3P7HrRHuJgu57CsT93resBj6/G/uw8F59/2HWZ7Oiff+jc1J9h6fo209FvpNH12cu582k8S7a5XcGZwGk8D9h3rM9Ms27it/njgqKv85hq5YuOcuqB7d/d1rYWFQxVVP9n7vhn9aw9JGHe1R/XEi/qSc1fI97Qblsu9vvqsFzN0y7tAQAAAAAAAAAAAAAAUPIPR8AudC1NyrEAAAAASUVORK5CYII="
                alt="img"
                onClick={this.timelimiteincrese}
              />
              <p>{timelimit}</p>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX////u7u4AAADt7e3+/v7v7+/09PT5+fliYmLj4+Py8vL6+vrp6elbW1snJydPT09KSkp8fHypqalTU1MXFxdAQECSkpLMzMwKCgq8vLyEhIRGRkYvLy89PT3T09MlJSWysrKbm5twcHBnZ2fGxsbPhUYmAAADmElEQVR4nO2cjW7aMBhFYxzbxclou/4x9r/u/Z9xZqQsJEw43qTvszi3EqjSDboHWxB8EzdmItc2I7Xpz9dtaRRngxBCCOWzQQghhPLZIIQQQvlsEC4htMeH6Jp2r6Y5PnhbtWU2hrGZKtqqLU3wSX8eTp/CXr5uy+wtaK0ZvQnW9n2o3DKawYcpbd3JRHYm1G25MIbOWdtVbpkf4iaHnJkZVVk0Z4MQQgjls0EIIYTy2SCE8HoJx0q/uM6dz1dlsROZGbOv23Ita206s0EIIYTy2SCEEEL5bBBCCKF8NlruPAstt/IKm5Z7MGntp2m5My3zQ/SsA7JeCiGE8tkghBBC+WwQQgihfDZa7jyLVPlMy/3fLBAqjw8hhPrjQwih/vgQQqg/PoSFhKfn88KWf2q5u/Qc2iakH5Yn8rPGqpOz7KlS0q6g5f7dvKWDY78+Vd9HP5JL/1kpy7rv2ua0I8xuuX3ofAj+/cPjSrWentft0GwvbbnTz+O4fpIGyNDmxff2LfOSltulGXu/Wm2lAS5ou13drqMtabmd8R+k42fqPkR3yLyo5bZ93ElHz9SdG2bpsvVSZ8OtdPRMbaKLBYTGho/S0TO1SV+MRYS+mjHsh+++hbPUhDvp6JnaHD8dIYRQqyCEUL8gvD7CY2Ps6yEsbbmrOWsbAy1quashfMu8eDURQi2CEEL9ghBC/YIQQv2C8CoIz7XcNRF2ozJt0b3cD9LRM7UZl4QLWu5Qzxju+/iCe7ldPd2TOVRPy1ruxFnPOo0rbLnrXGvLb7lrJWS9FEKVKiWsac27iNDYisaw6HoaW9EYmlhEaPyNdPRMfXKuiDCGe+nomfrcGV9C6OKXr9LZ8/TNF41h+jB136WzX9Z2tfphbNks9Tb63Uaa4KIeb6JzpuS6Nut6Z/zL8+vNTO+mkrO87n561/vhwrZlLbfrY2/TMPr5HeI+jq6Wj9EJWhq/T2ljYcs9vMbUUZeFe2aUx4cQQv3xIYRQf3wIIdQfH0II9cfPJjx/L/dfauPKLOxYrnw7cnYsH0xa9xpnx/JMy/wQPXs6svclhBDKZ4MQQgjls0EIIYTy2dixPM8y6YQ17TXOjuV5FgiVx4cQQv3xIYRQf3wIIdQfH8IrItTZT9Ny51loubVX2LTctNz6lwpZL4VQf3wIIdQfH0II9ceHEEL98Wm5G1pu7QtprCZCqD8+hBDqjw8hhPrjQwih/vgQJv0CcsQ7tP7cir4AAAAASUVORK5CYII="
                alt="img"
                onClick={this.timelimitedecrese}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Digitaltimer;
