import React from 'react';
import {
	DiagramWidget,
	DiagramEngine,
	DefaultNodeFactory,
	DefaultLinkFactory,
	DiagramModel,
	DefaultNodeModel,
	DefaultPortModel,
	LinkModel
} from 'storm-react-diagrams';

import './srd.css';

class DemoOne extends React.Component {

	componentWillMount() {

		this.jsonData = {"uid":"107129","trueorflase":false,"nickname":"Kevin","age":"14","gender":"M","nationality":"japan","recommendations":[{"exp":"A","items":[]}],"likedPlaces":[],"reviews":[]};
		this.str = this.jsonData.age;
		console.log(this.jsonData.nickname);
		this.engine = new DiagramEngine();
		this.engine.registerNodeFactory(new DefaultNodeFactory());
		this.engine.registerLinkFactory(new DefaultLinkFactory());

		const model = new DiagramModel();
		var positionX = 10;
		var positionY = 10;
		const nodes = []
		for(var i = 0; i < 5; i++){

			const node1 = new DefaultNodeModel('Node ' + (i+1), 'rgb(204,0,0)');
			const port1 = node1.addPort(new DefaultPortModel(false, 'out-1', 'out'));
			const port2 = node1.addPort(new DefaultPortModel(true, 'in-1', 'in'));
			node1.x = positionX;
			node1.y = positionY;
			positionX += 100;
			// positionY += 50;
			nodes.push(node1);
			model.addNode(node1);

		}

		for(var i = 0; i < 5; i++){
			
			// const port1 = node1.addPort(new DefaultPortModel(false, 'out-1', 'next'));	
			console.log("wwwww")
			var node = nodes[i];
			if(i === 4)
				continue;
			else
				var nextNode = nodes[i+1]
			console.log("###" + node.getPorts());
			for(var j = 0; j < 2; j++){
				console.log("Aaaaaa");
				const link = new LinkModel();
				var port = node.getPort('out-1');
				var portaa2 = nextNode.getPort('in-1');
				link.setSourcePort(port);
				link.setTargetPort(portaa2);
				model.addLink(link);
			}
			


		}

		// const node2 = new DefaultNodeModel('Node 2', 'rgb(192,255,0)');
		// const port2 = node2.addPort(new DefaultPortModel(true, 'in-1', 'IN'));
		// const port2_1 = node2.addPort(new DefaultPortModel(true, 'in-2', 'IN'));
		// node2.x = 100;
		// node2.y = 20;
		// (link1 as DefaultLinkModel).addLabel("Hello World!");
		

		// const link1 = new LinkModel();
		// link1.setSourcePort(port1);
		// link1.setTargetPort(port2);

		// const link2 = new LinkModel();
		// link2.setSourcePort(port1_1);
		// link2.setTargetPort(port2_1);

		// model.addNode(node1);
		// model.addNode(node2);
		// model.addLink(link1);
		// model.addLink(link2);

		// const nodes = []


		this.engine.setDiagramModel(model);
	}
	render() {
		console.log('aaaaa')
		return (
			
			<div>
				<h1>{this.str}</h1>
				<DiagramWidget diagramEngine={this.engine} />
			</div>
		);
	}
}

export default DemoOne;
