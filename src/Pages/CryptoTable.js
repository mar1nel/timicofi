// import React, {useEffect, useState} from "react";
import Navbar from "../Components/Navbar";
import {Table} from '@nextui-org/react';
// import styles from "./src/ComponentsUI.scss";
// import axios from "axios";

const CryptoTable = () => {

    const api = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=12&page=1&sparkline=false&locale=en'

    // fetch(api)
    //     .then(response => response.json())
    //     .then(data => {
    //         const items = data;
    //         const
    //     })


    return (
        <>
            <Navbar/>
            <h1 style={{
                textAlign: "center",
                padding: "20px",
            }}>Sells <span className="primary">Overview</span></h1>


            <Table
                // bordered
                shadow={false}
                color="primary"
                aria-label="Example pagination  table"
                css={{
                    height: "auto",
                    minWidth: "100%",
                    zIndex: "2",
                }}
                selectionMode="multiple">

                <Table.Header>
                    <Table.Column>Coin</Table.Column>
                    <Table.Column>Price</Table.Column>
                    <Table.Column>24h</Table.Column>
                    <Table.Column>Volume</Table.Column>
                </Table.Header>

                <Table.Body>
                    <Table.Row key="1">
                        <Table.Cell>Tony Reichert</Table.Cell>
                        <Table.Cell>CEO</Table.Cell>
                        <Table.Cell>Active</Table.Cell>
                        <Table.Cell>Active</Table.Cell>
                    </Table.Row>
                    <Table.Row key="2">
                        <Table.Cell>Zoey Lang</Table.Cell>
                        <Table.Cell>Technical Lead</Table.Cell>
                        <Table.Cell>Paused</Table.Cell>
                        <Table.Cell>Paused</Table.Cell>
                    </Table.Row>
                    <Table.Row key="3">
                        <Table.Cell>Jane Fisher</Table.Cell>
                        <Table.Cell>Senior Developer</Table.Cell>
                        <Table.Cell>Active</Table.Cell>
                        <Table.Cell>Active</Table.Cell>
                    </Table.Row>
                    <Table.Row key="4">
                        <Table.Cell>William Howard</Table.Cell>
                        <Table.Cell>Community Manager</Table.Cell>
                        <Table.Cell>Vacation</Table.Cell>
                        <Table.Cell>Vacation</Table.Cell>
                    </Table.Row>
                    <Table.Row key="5">
                        <Table.Cell>Jane Fisher</Table.Cell>
                        <Table.Cell>Senior Developer</Table.Cell>
                        <Table.Cell>Active</Table.Cell>
                        <Table.Cell>Active</Table.Cell>
                    </Table.Row>
                    <Table.Row key="6">
                        <Table.Cell>Zoey Lang</Table.Cell>
                        <Table.Cell>Technical Lead</Table.Cell>
                        <Table.Cell>Paused</Table.Cell>
                        <Table.Cell>Paused</Table.Cell>
                    </Table.Row>
                    <Table.Row key="7">
                        <Table.Cell>Zoey Lang</Table.Cell>
                        <Table.Cell>Technical Lead</Table.Cell>
                        <Table.Cell>Paused</Table.Cell>
                        <Table.Cell>Paused</Table.Cell>
                    </Table.Row>
                </Table.Body>

                <Table.Pagination
                    shadow
                    noMargin
                    align="center"
                    rowsPerPage={10}
                    onPageChange={(page) => console.log({page})}
                />

            </Table>
        </>
    )
}

export default CryptoTable;