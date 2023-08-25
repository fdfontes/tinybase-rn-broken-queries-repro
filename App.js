import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createQueries } from 'tinybase';
import { useCreateQueries, useResultCell } from 'tinybase/lib/ui-react';
import { createTestStore } from './api/testStore';
import {
  useCreateTestStore,
  useTextCardSourceIconCell,
} from './api/testStore-ui-react';

export default function App() {
  const testStore = useCreateTestStore(() =>
    createTestStore().setTextCardRow('rowid', {
      sourceIcon: 'lalalala',
      sourceName: 'lala',
      category: 'la',
      cardId: 'la',
      heading: 'la',
      subheading: 'la',
    })
  );

  const queries = useCreateQueries(testStore.getStore(), (store) =>
    createQueries(store).setQueryDefinition(
      'query',
      'textCard',
      ({ select }) => {
        select('heading');
      }
    )
  );
  console.log(testStore.getTables());
  console.log(queries.getResultTable('query'));
  return (
    <View style={styles.container}>
      <Text>
        This is a Tinybase test
        {' - '}
        {useTextCardSourceIconCell('rowid', testStore)}
        {' - '}
        {useResultCell('query', 'rowid', 'heading', queries)}
      </Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
