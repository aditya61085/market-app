import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    paddingHorizontal: '15px',
  },
  contentContainer: {
    paddingTop: 10,
  },
  basicContent: {
    textAlign: 'center',
    paddingTop: '5px',
  },
  buttonText: {
    textAlign: 'center'
  },

  //MarketOverviewScreen
  nameBlock: {
    flex: 1,
    paddingTop: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 12,
    color: "white",
  },
  details: {
    flex: 5,
    flexDirection: "column",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "white",
  },
  detailsRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  detailsRowColumn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 5,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "white",
    marginTop: 20,
  },
  separatorThin: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#A6A6A6",
  },
  propertyText: {
    fontSize: 12,
    color: "#A6A6A6",
    textAlign: "left",
  },
  valueText: {
    fontSize: 15,
    color: "white",
    textAlign: "right",
  },
  title: {
    paddingTop: 5,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  //StockChart



});