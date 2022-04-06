# san-fran-film-locations

## Dependencies

#### react v18.0.0 (Behaving as v17)

#### react-dom v18.0.0 (Behaving as v17)

#### react-router-dom v6.3.0

#### react-scripts v5.0.0

#### @googlemaps/react-wrapper v1.1.29

#### axios v0.26.1

#### bootstrap v5.1.3

#### react-bootstrap v2.2.2

## Description

This application displays a Google map, a table filled with information for locations in San Francisco that have been filmed for movies, and a search bar to filter that table.

## Structure

App.js itself renders two constant components with two more components wrapped in Routes; the Map within a Wrapper, a Searchbar with a text input and two buttons, and the Routes contains the Locations component or the Itinerary component, depending on the URL path. The Locations component renders a Film component for each film location object held in the locations state variable. The Itinerary component renders a Destination component for each marker location held in the markers state variable.

## App.js

On initial render data is fetched from sfgov. Before setting that to state into the locations state variable, a filter is done inside the useEffect to remove filmed locations without location addresses as it would cause errors later when passing that item into Google's API.

Quite a bit of logic went into implementing a drag and drop feature from scratch in order to move table rows from the table into the map. Those functions are all found in App.js.

The Wrapper component is imported via the googlemaps import and is used to pass the API key stored in the env file to the Map component. The Map component is also passed five different props; two functions related to the drag and drop feature, the markers state variable to instantiate map markers, and the map state variables to instantiate the Google map.

The Searchbar component is passed both searchTitle state variables. This controlled component is rendered via an input element.

The Locations component is passed three functions regarding the drag and drop feature, the locations state variable and the searchTitle variable which is controlled by the Searchbar component.

The Itinerary component is only passed the markers state variable

## Map.js

Inside the Map component there are two useEffects; one for the initial Google maps instantiation and the other to re-render map markers when the markers array is re-set to state.

The div being instantiated from the Google maps class is rendered along with another div holding two of the drag and drop feature.

## Searchbar.js

As stated earlier, this component is simply an input element controlled by the searchTitle state variable. An event listener handles any change in what is being typed in there to re-set the searchTitle.

The Searchbar component also renders two buttons that routes a path to the URL. Another component is warranted for this div.

## Locations.js

This component houses the filter logic which relies on the searchTitle being passed as props from Searchbar up to App, back down to it. This component is constantly listening for changes in searchTitle, which it uses to filter locations state.

A table and the header is being rendered here. The body of this table takes the filtered locations state and iterates over it to create a Film component per object.

## Film.js

This component represents a single object from the locations filtered state variable. This is a draggable table row and houses the start of the drag feature.

## Itinerary.js

This component simply creates a table and iterates over the markers state variable to feed into the Destination component.

## Destination.js

This component represents a single object from the markers state variable.

## My Shortcomings

I was not able to remove map markers after placing them on the map. In my local repo, the current method is buggy. I will fix this.

The Geocoder doesn't return anything for certain addresses despite sanitizing the address, I will have to troubleshoot this.

React Bootstrap wasn't utilized as much as I would have liked to as I focused more on functionality over design.
