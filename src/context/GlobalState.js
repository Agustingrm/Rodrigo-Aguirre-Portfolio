import PortfolioContext from "./PortfolioContext";
import { useEffect, useState } from "react";

const gql = String.raw;

function GlobalState({ children }) {
  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(true);
  // Use a side effect to fetch he data from the graphql endpoint
  useEffect(function () {
    fetch("https://1099a2v9.api.sanity.io/v1/graphql/production/default", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: gql`
          query {
            SiteSettings(id: "portfolio") {
              general {
                name
                coverImage {
                  asset {
                    url
                  }
                }
                projectImages {
                  asset {
                    url
                  }
                }
                projectDescription
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // set the data to state
        setProjects(res.data.SiteSettings);
        setLoading(false);
      });
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        loading,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export default GlobalState;
