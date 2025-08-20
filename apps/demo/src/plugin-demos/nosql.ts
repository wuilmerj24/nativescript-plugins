import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNosql } from '@demo/shared';
import { Nosql } from '@wuilmerj24/nosql';
import { check as checkPermission, request as requestPermission } from '@nativescript-community/perms';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  const randomDbName = generateDatabaseAndTables(5);

  page.bindingContext = new DemoModel(randomDbName.database, randomDbName.tables);
}

function generateRandomName(prefix: string): string {
  const adjectives = ['fast', 'secure', 'dynamic', 'global', 'smart', 'cloud', 'modern', 'atomic', 'vector', 'ultra'];
  const nouns = ['data', 'store', 'table', 'records', 'cluster', 'block', 'stream', 'index', 'entity', 'grid'];

  const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  // UUID corto (6 caracteres) para evitar nombres repetidos
  const randomId = Math.random().toString(36).substring(2, 8);

  return `${prefix}_${randomAdj}_${randomNoun}_${randomId}`;
}

// Función que genera nombres de base de datos y tablas
function generateDatabaseAndTables(tableCount: number = 3) {
  const databaseName = generateRandomName('db');
  const tables: string[] = [];

  for (let i = 0; i < tableCount; i++) {
    tables.push(generateRandomName('tbl'));
  }

  return {
    database: databaseName,
    tables,
  };
}

export class DemoModel extends DemoSharedNosql {}
