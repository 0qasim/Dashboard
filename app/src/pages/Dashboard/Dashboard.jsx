import { useQuery } from "react-query";
import DashboardLayout from "../../Components/DashboardLayout";
import PriceSection from "./components/PriceSection";
import Portfolio from "./components/Portfolio";
import { Grid, GridItem } from "@chakra-ui/react";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";
import { fetchExample } from "../../api/query/exampleQuery";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";




const Dashboard = ({}) => {
const {name} =useContext(AuthContext)

 const exampleQuery= useQuery({
queryKey: ['example'],
queryFn:  fetchExample ,

 })
 if(exampleQuery.isLoading) return <div>loadingg</div>


  return (
    <div>
      <DashboardLayout title="Dashboard">
        <Grid
          gridTemplateColumns={{ md: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }}
          gap="6"
        >
          <GridItem colSpan={2}>
            <Portfolio />
          </GridItem>
          <GridItem colSpan={1}>
            <PriceSection />
          </GridItem>
          <GridItem colSpan={1}>
            <Transactions />
          </GridItem>
          <GridItem colSpan={1}>
            <InfoCard
              imgUrl="/dot_bg.svg"
              text=" Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it"
              tagText="Loan"
              inverted={false}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <InfoCard
              inverted={true}
              tagText="Contact"
              imgUrl="/grid_bg.svg"
              text="Learn more about our real estate, mortgage, and  corporate account services"
            />
          </GridItem>
        </Grid>
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
