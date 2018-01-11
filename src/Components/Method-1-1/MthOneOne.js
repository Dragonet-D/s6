import React, {Component} from 'react'
import bg from './bg.png'
import './index.scss'

class MthOneOne extends Component {
  render() {
    return (
      <div className="page_content">
        <img src={bg} alt="bg"/>
        <div className="remind_1_1">
          <header className="header">
            <div className="title">
              <h2 className="title_content">Comparing the chromatogram of the unknown mixture with those of known
                substances</h2>
            </div>
            <div className="back_wrapper">
              <div className="back_home">
                <div className="back_content">Home</div>
              </div>
            </div>
          </header>
          <main className="main">

          </main>
          <footer className="footer">
            <div className="previous footer_guide">
              <div className="prev_content guide_content">Previous</div>
            </div>
            <div className="replay footer_guide">
              <div className="replay_content guide_content">Replay</div>
            </div>
            <div className="remind_click">Click on the Next button to see the chromatogram</div>
            <div className="triangle"/>
            <div className="next footer_guide">
              <div className="next_content guide_content">Next</div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default MthOneOne