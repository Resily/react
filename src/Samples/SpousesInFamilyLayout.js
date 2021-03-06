import React, { Component } from 'react';
import { FamDiagram } from '../Diagrams';
import { Enabled, GroupByType, PageFitMode } from 'basicprimitives';

class Sample extends Component {
  render() {
    const config = {
      lineItemsInterval: 20,
      cursorItem: 1,
      hasSelectorCheckbox: Enabled.False,
      arrowsDirection: GroupByType.Children,
      pageFitMode: PageFitMode.None,
      items: [
        { id: 1, parents: [], spouses: ["2", "3"], title: "Odelia Locker", label: "Odelia Locker", description: "Has 2 marriages", image: "/react/photos/a.png" },
        { id: 2, parents: [], title: "John Smith", label: "John Smith", description: "1st marriage", image: "/react/photos/b.png" },
        { id: 3, parents: [], title: "Brad Whitt", label: "Brad Whitt", description: "2nd marriage", image: "/react/photos/c.png" }
      ]
    };

    return <div className="placeholder">
      <FamDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
