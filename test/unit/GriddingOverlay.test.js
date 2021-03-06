import GriddingOverlay from '../../src/overlay/GriddingOverlay';

describe('GriddingOverlay ', () => {
    function createOverlay() {
        return new GriddingOverlay({
            tooltip: {
                show: true,
                formatter: function (val) {
                    return val.count;
                }
            },
            style: {
                type: "avg",
                normal: {
                    size: 10,
                    unit: 'px', //单位像素
                    padding: 1
                },
                mouseOver: {
                    shadowColor: 'rgba(255, 250, 255, 1)',
                    shadowBlur: 20,
                },
                selected: {
                    backgroundColor: 'rgba(184,0,0,1)',
                },
                colors: [
                    "rgba(31,98,1,1)",
                    "rgba(95,154,4,1)",
                    "rgba(139,227,7,1)",
                    "rgba(218,134,9,1)",
                    "rgba(220,54,6,1)",
                    "rgba(218,2,8,1)",
                    "rgba(148,1,2,1)",
                    "rgba(92,1,0,1)"
                ]
            },
            data: null,
            event: {
                onState(state) {
                    console.log(state);
                },
                onMouseClick(data, event) {
                    console.log(data, event);
                }
            }
        });
    }
    it('constructor ', () => {
        let overlay = createOverlay();
        expect(overlay.points).to.eql([]);
    });

    it('setData', () => {
        let overlay = createOverlay();
        overlay.setData(null);
        expect(overlay.points).to.eql([]);

        let data = [{
            "count": 4,
            "geometry": {
                "type": "Point",
                "coordinates": [117.306518554688, 38.5537719726562]
            }
        }];

        overlay.setData(data);
        expect(overlay.points).to.eql(data);
        expect(overlay.workerData).to.eql([]);

        overlay.setData(undefined);

        expect(overlay.points).to.eql([]);
        expect(overlay.workerData).to.eql([]);

    });
    
});