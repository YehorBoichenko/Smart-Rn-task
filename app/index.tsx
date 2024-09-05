/**
 * The `Home` component is a React Native functional component that serves as the main page layout.
 * It uses several shared components to structure the page:
 * - `Wrapper` to encapsulate the content
 * - `Header` to display the page header
 * - `Table` to render a table of data
 * - `Footer` to show the page footer
 *
 * This component is asynchronous, which may be used for data fetching or other asynchronous operations.
 *
 * @returns {JSX.Element} The rendered JSX for the Home page, including the Wrapper, Header, Table, and Footer components.
 */
import React from 'react';
import { View, ScrollView } from 'react-native';
import { Wrapper } from '@/components/Wrapper';
import { Table } from '@/components/Table';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Home(): JSX.Element {
  return (
    <Wrapper>
      <ScrollView >
        <Header />
        <View >
          <Table />
        </View>
        <Footer />
      </ScrollView>
    </Wrapper>
  );
}
