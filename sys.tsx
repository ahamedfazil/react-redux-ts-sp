import * as React from 'react'
import { useContext, useEffect } from 'react'
import { HellowWorldContext } from '../../hooks/useHellowWorldContext';
import { ISPHttpClientOptions, SPHttpClient } from '@microsoft/sp-http';

export default function SystemUpdate() {

    const { helloWorld } = useContext(HellowWorldContext);


    function delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    useEffect(() => {
        const sysUpdate = async (): Promise<void> => {
            try {
                await delay(2000);
                console.log("FazLog ~ sysUpdate ~ two seconds waited");


                const listRelativeUrl = '/sites/gca-dev/Shared Documents';
                const itemId = 2;
                const siteUrl = "https://cafacloud.sharepoint.com/sites/gca-dev";

                //                 const body = `
                //   <Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="Javascript Library"><Actions><Method Name="SetFieldValue" Id="4" ObjectPathId="3"><Parameters><Parameter Type="String">Title</Parameter><Parameter Type="String">UpdatedXML, ${new Date().toISOString()}</Parameter></Parameters></Method><Method Name="SystemUpdate" Id="5" ObjectPathId="3" /></Actions><ObjectPaths><Property Id="1" ParentId="0" Name="Web" /><Method Id="2" ParentId="1" Name="GetList"><Parameters><Parameter Type="String">${listRelativeUrl}</Parameter></Parameters></Method><Method Id="3" ParentId="2" Name="GetItemById"><Parameters><Parameter Type="Number">${itemId}</Parameter></Parameters></Method><StaticProperty Id="0" TypeId="{3747adcd-a3c3-41b9-bfab-4a64dd2f1e0a}" Name="Current" /></ObjectPaths></Request>`;

                const body = `<Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="Javascript Library">
    <Actions>
        <Method Name="SetFieldValue" Id="4" ObjectPathId="3">
            <Parameters>
                <Parameter Type="String">Review</Parameter>
                <Parameter Type="DateTime">${new Date(new Date().setDate(new Date().getDate() + 19)).toISOString()}</Parameter>
            </Parameters>
        </Method>

        <Method Name="SetFieldValue" Id="5" ObjectPathId="3">
            <Parameters>
                <Parameter Type="String">Owner</Parameter>
                <Parameter Type="Number">6</Parameter>
            </Parameters>
        </Method>

        <Method Name="SystemUpdate" Id="6" ObjectPathId="3" />
    </Actions>
    <ObjectPaths>
        <Property Id="1" ParentId="0" Name="Web" />
        <Method Id="2" ParentId="1" Name="GetList">
            <Parameters>
                <Parameter Type="String">${listRelativeUrl}</Parameter>
            </Parameters>
        </Method>
        <Method Id="3" ParentId="2" Name="GetItemById">
            <Parameters>
                <Parameter Type="Number">${itemId}</Parameter>
            </Parameters>
        </Method>
        <StaticProperty Id="0" TypeId="{3747adcd-a3c3-41b9-bfab-4a64dd2f1e0a}" Name="Current" />
    </ObjectPaths>
</Request>`;

                const endpoint = `${siteUrl}/_vti_bin/client.svc/ProcessQuery`;
                // const client = new SPHttpClient();

                const spOpts: ISPHttpClientOptions = {
                    body: body
                };
                await helloWorld?.context.spHttpClient.post(endpoint, SPHttpClient.configurations.v1, spOpts);

                // .then((response: SPHttpClientResponse) => {
                //     // Access properties of the response object. 
                //     console.log(`Status code: ${response.status}`);
                //     console.log(`Status text: ${response.statusText}`);

                //     //response.json() returns a promise so you get access to the json in the resolve callback.
                //     response.json().then((responseJSON: JSON) => {
                //         console.log(responseJSON);
                //     });
                // });

                // client.post(endpoint, {
                //     headers: {
                //         'Accept': '*/*',
                //         'Content-Type': 'text/xml;charset="UTF-8"',
                //         'X-Requested-With': 'XMLHttpRequest'
                //     },
                //     body
                // })
                //     .then(r => r.json())
                //     .then(r => {
                //         if (r[0].ErrorInfo) {
                //             throw new Error(r[0].ErrorInfo.ErrorMessage);
                //         }
                //         return r;
                //     });



            } catch (error) {
                console.log("FazLog ~ sysUpdate ~ error:", error);
            }
        }
        sysUpdate().catch(e => console.error(e));
    }, []);

    return (
        <div>SystemUpdate</div>
    )
}
