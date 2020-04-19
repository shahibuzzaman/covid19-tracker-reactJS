import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import useSWR from 'swr';
import 'mapbox-gl/dist/mapbox-gl.css';

import './Map.css';
mapboxgl.accessToken =
  'pk.eyJ1Ijoic2hhaGlidXp6YW1hbiIsImEiOiJjazhtMjlsZGMwZTdwM2xvNHYyZWZnaW95In0.wv7TDBBzK5g_Rqwi32PWag';

function MapContainer() {
  const mapContainer = useRef(null);

  const fetcher = (url) =>
    fetch(url)
      .then((r) => r.json())
      .then((data) =>
        data.map((point, index) => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [point.countryInfo.long, point.countryInfo.lat],
          },
          properties: {
            id: index,
            country: point.country,
            cases: point.cases,
            recovered: point.recovered,
            deaths: point.deaths,
            todayDeaths: point.todayDeaths,
            todayCases: point.todayCases,
            flag: point.countryInfo.flag,
          },
        }))
      );

  const { data } = useSWR('https://corona.lmao.ninja/v2/countries', fetcher);

  useEffect(() => {
    if (data) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/shahibuzzaman/ck909hv6e00o81ik4qee1l32u',
        center: [16, 27],
        zoom: 1,
      });

      map.once('load', function () {
        map.addSource('points', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: data,
          },
        });

        map.addLayer({
          id: 'circles',
          source: 'points',
          type: 'circle',
          paint: {
            'circle-opacity': 0.75,
            'circle-stroke-width': 1,
            'circle-radius': [
              'interpolate',
              ['linear'],
              ['get', 'cases'],
              1,
              4,
              1000,
              8,
              4000,
              10,
              8000,
              14,
              12000,
              18,
              100000,
              24,
              500000,
              30,
              1000000,
              40,
            ],
            'circle-color': 'red',
          },
        });
        const popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
        });
        let lastId;
        map.on('mousemove', 'circles', (e) => {
          const id = e.features[0].properties.id;

          if (id !== lastId) {
            lastId = id;

            map.getCanvas().style.cursor = 'pointer';

            const {
              cases,
              deaths,
              country,
              recovered,
              flag,
              todayCases,
              todayDeaths,
            } = e.features[0].properties;
            const coordinates = e.features[0].geometry.coordinates.slice();

            const mortalityRate = ((deaths / cases) * 100).toFixed(2);

            const recoverRate = ((recovered / cases) * 100).toFixed(2);

            const countryFlag = `<img src=${flag}></img>`;

            const HTML = `${countryFlag} <h4>${country}</h4>
            <div class="middle">
            <hr>
                      <p>Cases: <b>${cases}</b></p>
                      <p style="color:red;">Deaths: <b>${deaths}</b></p>
                      <p style="color:green;">Recovered : <b>${recovered}</b></p>
                      <p>Mortality Rate: <b>${mortalityRate}%</b></p>
                      <p>Recover Rate: <b>${recoverRate}%</b></p>
                      <hr>
                      </div>
                      <div class="middle">
                      <p>New Cases : <b>${todayCases}</b></p>
                      <p>New Death : <b>${todayDeaths}</b></p>
                      </div>

                      `;

            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            popup.setLngLat(coordinates).setHTML(HTML).addTo(map);
          }
        });

        map.on('mouseleave', 'circles', function () {
          lastId = undefined;
          map.getCanvas().style.cursor = '';
          popup.remove();
        });
      });
    }
  }, [data]);

  return (
    <div>
      <div className=''></div>
      <div ref={mapContainer} className='mapContainer shadow-sm' />
    </div>
  );
}

export default MapContainer;
