import React from "react";
import { connect } from "react-redux";
import { Chart } from "react-charts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import "./styles.scss";

const STATIC_COLORS = new Array(50)
  .fill(null)
  .map(() => "#" + ((Math.random() * 0xffffff) << 0).toString(16));

class Container extends React.PureComponent<> {
  state = {
    chartData: [
      {
        label: "Series 1",
        // data: [[0, 1], [1, 2], [2, 4], [3.3, 2], [4, 7]]
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7], [5, 7], [6, 7], [7, 7]]
      }
      // {
      // label: "Series 2",
      // data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      // },
      // {
      //     label: "Series 3",
      //     data: [[0, 3], [2, 1], [2, 5], [3, 6], [4, 4]]
      // },
    ],
    selectedRoutes: {}
  };
  componentDidMount = () => {
    this.createChartData();
  };

  handleSelectRoute = route => {
    if (this.state.selectedRoutes[route.Id]) {
      this.setState(
        {
          selectedRoutes: { ...this.state.selectedRoutes, [route.Id]: false }
        },
        this.createChartData
      );
    } else {
      this.setState(
        {
          selectedRoutes: { ...this.state.selectedRoutes, [route.Id]: true }
        },
        this.createChartData
      );
      // this.setState({selectedRoutes: {...this.state.selectedRoutes, [route.Id]: true}});
    }
  };
  createChartData = () => {
    const bookingsWithDays = this.props.bookings.map(booking => {
      const day = new Date(booking.Trip.Schedule.DepartDate).getDay();
      return {
        ...booking,
        day
      };
    });
    const routes = this.props.routes;
    const filteredRoutes = routes.filter(
      route => this.state.selectedRoutes[route.Id]
    );
    const createDataFromRoute = day => {
      const reduced = filteredRoutes.reduce((acc, cur) => {
        return {
          [cur.Route]: bookingsWithDays.filter(
            booking => booking.day === day && booking.Trip.Route.Id === cur.Id
          ).length,
          ...acc
        };
      }, {});

      return reduced;
    };
    const data = [
      {
        name: "Sunday",
        ...createDataFromRoute(0)
      },
      {
        name: "Monday",
        ...createDataFromRoute(1)
      },
      {
        name: "Tuesday",
        ...createDataFromRoute(2)
      },
      {
        name: "Wednesday",
        ...createDataFromRoute(3)
      },
      {
        name: "Thursday",
        ...createDataFromRoute(4)
      },
      {
        name: "Friday",
        ...createDataFromRoute(5)
      },
      {
        name: "Saturday",
        ...createDataFromRoute(6)
      }
    ];
    console.log("datang", data);
    this.setState({ chartData: data });
  };
  render() {
    return (
    <div class="row">
      <div
        class="col-md-9"
        style={{
          border: "0px solid silver",
          overflow: "scroll",
          height: "80vh"
        }}
      >
        <div
          style={{
            width: "100%",
            height: "80%",
            overflow: "scroll"
          }}
        >
          <LineChart
            width={800}
            height={300}
            data={this.state.chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/*
                    <Legend />
                    */}
            {this.props.routes.map((route, index) => {
              console.log("buhu", STATIC_COLORS[index]);
              return (
                <Line
                  type="monotone"
                  dataKey={route.Route}
                  stroke={STATIC_COLORS[index]}
                  activeDot={{ r: 8 }}
                />
              );
            })}
          </LineChart>
        </div>
      </div>
      <div
        class="col-md-3"
        style={{
          border: "0px solid silver",
          overflow: "scroll",
          height: "80vh"
        }}
      >
        <div style={{ marginTop: "1em", height: "75vh", overflowY: "scroll" }}>
          {this.props.routes.map(route => {
            return (
              <>
                <input
                  type="checkbox"
                  style={{ marginBottom: ".5em" }}
                  onClick={() => this.handleSelectRoute(route)}
                />{" "}
                {route.Route}
                <br />
              </>
            );
          })}
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  routes: state.routeStore.routes,
  bookings: state.bookingStore.bookings,
  vehicles: state.vehicleStore.vehicles,
  drivers: state.driverStore.drivers,
  commuters: state.commuterStore.commuters
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
